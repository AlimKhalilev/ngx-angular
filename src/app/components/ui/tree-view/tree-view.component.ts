import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { slideToggleAnimation } from 'src/app/animations/slide-toggle.animation';

export interface INgxTreeView {
    id?: number,
    caption: string,
    icon: string,
    expanded?: boolean,
    selected?: boolean,
    tooltip?: string,
    children?: INgxTreeView[],
    onClick?: () => void
}

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
	@Input() dataSource!: INgxTreeView[];

    /** Список датасурса в один уровень */
    inlineDataSource: INgxTreeView[] = [];

    /** Ссылка на объект, который в данный момент выделен */
    selectedItem!: INgxTreeView;

    /** Уникальный идентификатор объекта списка */
    uniqueId: number = 0;

    constructor(private cd: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.itemRef.toArray().forEach((elRef, i) => {
            this.fillTooltip(elRef);
        });
        this.cd.detectChanges();
    }

    ngOnInit(): void {
        this.convertRecursiveListToInline(this.dataSource);
        console.log(this.inlineDataSource);
    }

    private convertRecursiveListToInline(list: INgxTreeView[]): void {
        list.forEach(item => {
            /** Изначальная инициализация незаполненных ключей */
            item.id = this.uniqueId++;
            item.expanded = item.expanded ? true : false;

            if (item.selected) {
                this.selectedItem = item;
            }

            this.inlineDataSource.push(item);
            if (item.children && item.children.length) {
                this.convertRecursiveListToInline(item.children);
            }
        });
    }

    /** Событие клика на элемент (выбор элемента) */
    public onSelectItem(item: INgxTreeView) {
        this.selectedItem.selected = false;
        this.selectedItem = item;
        this.selectedItem.selected = true;
    }

    /** Событие клика на chevron (раскрытие списка) */
    public onExpandItem(item: INgxTreeView, e: Event) {
        e.stopPropagation();
        item.expanded = !item.expanded;
    }

    /** Возвращает наличие в списке хоть одного элемента по ключу */
    public listHasSomeKey(list: INgxTreeView[], key: 'icon'): boolean {
        return list.some(item => item[key]);
    }

    /** Метод заполняющий тултип там, где у текста text-overlow: ellipsis; */
    private fillTooltip(elRef: ElementRef<HTMLDivElement>) {
        let el = elRef.nativeElement.querySelector('.ngx-tree-view__caption');
        if (el !== null) {
            if (((el as HTMLElement).offsetWidth < (el as HTMLElement).scrollWidth)) {
                let id = (el as HTMLElement).dataset['id'];
                if (id) {
                    this.inlineDataSource[+id].tooltip = this.inlineDataSource[+id].caption;
                }
            }
        }
    }

    /** Метод скрывающий/раскрывающий все элементы списка */
    public toggleAllItems() {
        this.inlineDataSource = this.inlineDataSource.map(e => {
            e.expanded = !e.expanded;
            return e;
        });
    }

}
