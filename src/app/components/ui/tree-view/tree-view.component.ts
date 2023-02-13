import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Subject } from 'rxjs';
import { slideToggleAnimation } from 'src/app/animations/slide-toggle.animation';
import { IMenuItem } from 'src/app/data/menu/menu-item';

@Component({
    selector: 'ngx-tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss'],
    animations: [slideToggleAnimation]
})
export class NgxTreeViewComponent implements OnInit, AfterViewInit {

    /** Ссылка на список DOM элементов пунктов списка дерева */
    @ViewChildren('itemRef') itemRef!: QueryList<ElementRef<HTMLDivElement>>;
    
    /** Ресурс данных для компонента treeView */
	@Input() dataSource!: IMenuItem[];

    /** Список датасурса в один уровень */
    inlineDataSource: IMenuItem[] = [];

    /** Ссылка на объект, который в данный момент выделен */
    selectedItem!: IMenuItem;

    /** Уникальный идентификатор объекта списка */
    uniqueId: number = 0;

    /** Модель строки фильтра */
    filterStr: string = '';

    constructor(private cd: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.itemRef.toArray().forEach((elRef, i) => {
            this.fillTooltip(elRef);
        });
        this.cd.detectChanges();
    }

    ngOnInit(): void {
        this.convertRecursiveListToInline(this.dataSource);
        //console.log(this.inlineDataSource);
    }

    private convertRecursiveListToInline(list: IMenuItem[], parent?: IMenuItem): void {
        list.forEach(item => {
            /** Изначальная инициализация незаполненных ключей */
            item.posId = this.uniqueId++;
            item.expanded = item.expanded ? true : false;
            item.visible = true;
            item.toolTip = '';
            item.parent = parent;

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
        this.selectedItem.selected = false;
        this.selectedItem = item;
        this.selectedItem.selected = true;
    }

    /** Событие клика на chevron (раскрытие списка) */
    public onExpandItem(item: IMenuItem, e: Event) {
        e.stopPropagation();
        item.expanded = !item.expanded;
    }

    /** Возвращает наличие в списке хоть одного элемента по ключу */
    public listHasSomeKey(list: IMenuItem[], key: 'pictureData'): boolean {
        return list.some(item => item[key]);
    }

    /** Метод заполняющий тултип там, где у текста text-overlow: ellipsis; */
    private fillTooltip(elRef: ElementRef<HTMLDivElement>): void {
        let el = elRef.nativeElement.querySelector('.ngx-tree-view__caption');
        if (el !== null) {
            if (((el as HTMLElement).offsetWidth < (el as HTMLElement).scrollWidth)) {
                let id = (el as HTMLElement).dataset['id'];
                if (id) {
                    this.inlineDataSource[+id].toolTip = this.inlineDataSource[+id].caption;
                }
            }
        }
    }

    /** Метод добавляющие префикс base64 пути для картинки */
    public getPictureBase64(src: string): string {
        return `data:image/jpg;base64,${src}`;
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
    }

    public onFilterChange(): void {
        this.inlineDataSource = this.inlineDataSource.map(e => {
            if (this.filterStr) {
                e.expanded = true;
            }
            if (e.caption.toLocaleLowerCase().includes(this.filterStr.toLocaleLowerCase())) {
                this.changeItemVisible(e);
            }
            else {
                //console.log(e.posId, false);
                e.visible = false;
            }
            return e;
        });
    }

    private changeItemVisible(item: IMenuItem) {
        item.visible = true;
        //console.log(item.posId, true);
        
        if (item.parent) {
            this.changeItemVisible(item.parent);
        }
    }

}