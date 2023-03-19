import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { slideToggleAnimation } from 'src/app/animations/slide-toggle.animation';
import { IMenuItem } from 'src/app/interfaces/menu/menu-item';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    selector: 'ngx-tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss'],
    animations: [slideToggleAnimation],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxTreeViewComponent implements OnInit, AfterViewInit {
    
    /** Ресурс данных для компонента treeView */
	@Input() dataSource!: IMenuItem[];

    /** Флаг возможности фильтрации treeView */
	@Input() hasFilter: boolean = false;

    /** Событие выбора элемента из списка */
	@Output() onSelect = new EventEmitter<IMenuItem>();

    /** Список датасурса в один уровень */
    inlineDataSource: IMenuItem[] = [];

    /** Ссылка на объект, который в данный момент выделен */
    selectedItem!: IMenuItem;

    /** Уникальный идентификатор объекта списка */
    uniqueId: number = 0;

    /** Модель строки фильтра */
    filterStr: string = '';

    /** Модель строки фильтра (предыдущее значение) */
    filterStrPrev: string = '';

    constructor(private cd: ChangeDetectorRef, public utilsService: UtilsService) {}

    ngOnInit(): void {
        this.convertRecursiveListToInline(this.dataSource);
        //console.log(this.inlineDataSource);
    }

    ngAfterViewInit(): void {
        /** 
            Для избежания Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError, 
            чтобы tooltip отображался у всех компонентов при наведении
        */

        setTimeout(() => this.cd.markForCheck(), 100);
    }

    private convertRecursiveListToInline(list: IMenuItem[], parent?: IMenuItem): void {
        list.forEach(item => {
            /** Изначальная инициализация незаполненных ключей */
            item.expanded = item.expanded ? true : false;
            item.visible = true;
            
            if (this.hasFilter) {
                item.parent = parent;
            }

            if (item.selected) {
                this.selectedItem = item;
            }

            this.inlineDataSource.push(item);
            if (item.items && item.items.length) {
                this.convertRecursiveListToInline(item.items, item);
            }
        });
    }

    /** Событие клика на элемент (выбор элемента) */
    public onSelectItem(item: IMenuItem) {
        if (this.selectedItem) {
            this.selectedItem.selected = false;
        }
        this.selectedItem = item;
        this.selectedItem.selected = true;
        this.onSelect.emit(this.selectedItem);
    }

    /** Событие клика на chevron (раскрытие списка) */
    public onExpandItem(item: IMenuItem, e: Event) {
        e.stopPropagation();
        item.expanded = !item.expanded;
    }

    /** Возвращает наличие в списке хотя-бы одной картинки (ссылки или base64) */
    public listHasSomePicture(list: IMenuItem[]): boolean {
        return list.some(item => item.pictureData || item.pictureKey);
    }

    /** Метод скрывающий/раскрывающий все элементы списка */
    public toggleAllItems(): void {
        let expandCount = 0;
        let collapseCount = 0;

        this.inlineDataSource.forEach(e => e.expanded ? expandCount++ : collapseCount++);
        this.inlineDataSource = this.inlineDataSource.map(e => {
            e.expanded = (collapseCount >= expandCount);
            return e;
        });

        this.cd.markForCheck();
    }

    /** Метод срабатывания фильтра списка, когда меняем значения инпута фильтра */
    public onFilterChange(): void {        
        if (this.filterStr !== this.filterStrPrev) {
            this.inlineDataSource = this.inlineDataSource.map(e => {
                e.visible = false;
                if (e.caption.toLocaleLowerCase().includes(this.filterStr.toLocaleLowerCase())) {
                    this.changeItemVisible(e);
                }
                return e;
            });
        }
        this.filterStrPrev = this.filterStr;
    }

    /** Рекурсивно изменяет видимость элемента у текущего элемента и у родителя */
    private changeItemVisible(item: IMenuItem) {
        item.visible = true;
        item.expanded = true;
        
        if (item.parent) {
            this.changeItemVisible(item.parent);
        }
    }
}