import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
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

    /** Ссылка на список DOM элементов заголовков элемента */
    @ViewChildren('captionRef') captionRef!: QueryList<ElementRef<HTMLDivElement>>;
    
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

    constructor(private cd: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.captionRef.toArray().forEach((elRef, i) => {
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
        this.selectedItem.selected = false;
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

    /** Метод получения ресурса для картинка (ссылка или base64) */
    public getPictureSrc(path: string): string {
        let src = '';
        if (path) {
            try {
                window.atob(path);
                src = `data:image/jpg;base64,${path}`;
            } catch(e) {
                src = path;
            }
        }
        return src;
    }

    // public getPictureSrc(item: IMenuItem): string {
    //     let src = '';
    //     if (item.pictureData) {
    //         try {
    //             window.atob(item.pictureData);
    //             src = `data:image/jpg;base64,${item.pictureData}`;
    //         } catch(e) {
    //             src = '';
    //         }
    //     }
    //     if (item.pictureKey) {
    //         src = item.pictureKey;
    //     }
    //     return src;
    // }

    /** Метод заполняющий тултип там, где у текста text-overlow: ellipsis; */
    private fillTooltip(elRef: ElementRef<HTMLDivElement>): void {
        if ((elRef.nativeElement.offsetWidth < elRef.nativeElement.scrollWidth)) {
            let id = elRef.nativeElement.dataset['id'];
            if (id) {
                this.inlineDataSource[+id].toolTip = this.inlineDataSource[+id].caption;
            }
        }
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