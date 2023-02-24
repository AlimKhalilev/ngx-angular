import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { IMenuItem } from 'src/app/data/menu/menu-item';
import { INgxContextMenu } from '../context-menu/context-menu.component';

@Component({
    selector: 'ngx-tile-view',
    templateUrl: './tile-view.component.html',
    styleUrls: ['./tile-view.component.scss']
})
export class NgxTileViewComponent implements OnInit, AfterViewInit {

    /** Ссылка на список DOM элементов заголовков элемента */
    @ViewChildren('captionRef') captionRef!: QueryList<ElementRef<HTMLDivElement>>;

    /** Ресурс данных для компонента tileView */
	@Input() dataSource!: IMenuItem[];

    /** Список датасурса в один уровень */
    inlineDataSource: IMenuItem[] = [];

    /** Ссылка на объект, который в данный момент выделен */
    selectedItem!: IMenuItem;

    /** Уникальный идентификатор объекта списка */
    uniqueId: number = 0;

    /** Событие выбора элемента из списка */
	@Output() onSelect = new EventEmitter<IMenuItem>();

    constructor(private cd: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
        this.captionRef.toArray().forEach((elRef, i) => {
            this.fillTooltip(elRef);
        });
        this.cd.detectChanges();
    }

    ngOnInit(): void {
        this.basicListInit(this.dataSource);
    }

    /** Изначальный проход по дереву (установление selected и прочее) */
    private basicListInit(list: IMenuItem[]): void {
        list.forEach(item => {
            item.posId = this.uniqueId++;
            item.expanded = item.expanded ? true : false;
            item.toolTip = '';

            if (item.selected) {
                this.selectedItem = item;
            }

            this.inlineDataSource.push(item);

            if (item.items && item.items.length) {
                this.basicListInit(item.items);
            }
        });
    }

    /** Метод заполняющий тултип там, где у текста text-overlow: ellipsis; */
    private fillTooltip(elRef: ElementRef<HTMLDivElement>): void {
        if ((elRef.nativeElement.offsetWidth < elRef.nativeElement.scrollWidth)) {
            let id = elRef.nativeElement.dataset['id'];
            if (id) {
                this.inlineDataSource[+id].toolTip = this.inlineDataSource[+id].caption;
            }
        }
    }

    /** Метод получения ресурса для картинка (ссылка или base64) */
    public getPictureSrc(path: string | null | undefined): string {
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

    /** Событие клика на элемент (выбор элемента) */
    public onSelectItem(item: IMenuItem) {
        if (this.selectedItem) {
            this.selectedItem.selected = false;
        }
        this.selectedItem = item;
        this.selectedItem.selected = true;
        this.onSelect.emit(this.selectedItem);
    }

    /** Событие клика на dropdown (раскрытие меню) */
    public onExpandItem(item: IMenuItem, state: boolean) {
        item.expanded = state;
    }

    contextMenuData: INgxContextMenu[] = [
        {
            text: 'Заглушка 1',
            icon: 'ngx-notepad-edit-20',
            borderBottom: true,
            children: []
        },
        {
            text: 'Заглушка 2',
            shortcut: 'Shift+F11',
            children: []
        },
        {
            text: 'Заглушка 3',
            icon: 'ngx-table-settings-20',
            shortcut: 'Shift+F11',
            children: []
        },
        {
            text: 'Заглушка 4',
            icon: 'ngx-search-20',
            children: [
                {
                    text: 'Заглушка 4 - 1',
                    icon: 'ngx-copy-20',
                },
                {
                    text: 'Заглушка 4 - 2',
                    icon: 'ngx-add-circle-20',
                },
            ]
        }
    ]
}
