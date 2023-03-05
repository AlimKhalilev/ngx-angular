import { Component, ContentChild, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { INgxListItem } from '../list-item/list-item.component';

/** Интерфейс входных данных компонента контекстного меню */
export interface INgxContextMenu extends INgxListItem {
    borderBottom?: boolean;
    onClick?: () => void;
    children?: INgxContextMenu[];
    data?: any
}

@Component({
    selector: 'ngx-context-menu',
    templateUrl: './context-menu.component.html',
    styleUrls: ['./context-menu.component.scss']
})
export class NgxContextMenuComponent {

    /** Получаем ссылку на меню для его повторного открытия по рекурсии */
	@ViewChild('childMenu', { static: true }) public childMenu: any;

    /** Элемент триггер, на который вешается клик на открытие меню  */
	@ContentChild("menuTriggerEl", {read: ElementRef<HTMLDivElement>}) menuTriggerEl!: ElementRef<HTMLDivElement>;

    /** Входные параметры элементов в меню */
	@Input() items!: INgxContextMenu[];

	/** Флаг открытия меню по клику правой кнопкой мыши */
	@Input() rightClickOpen: boolean = false;

    /** Событие открытия, либо закрытия контекстного меню (true - открыто, false - закрыто) */
	@Output() onChangeState: EventEmitter<boolean> = new EventEmitter<boolean>();

    /** Событие клика на пункт списка */
	@Output() onItemClick: EventEmitter<INgxContextMenu> = new EventEmitter<INgxContextMenu>();

    constructor() {}

    /** Метод который прокидывает пустые иконки, если в списке есть брешь списка относительно иконок */
    fillIconSpace(items: INgxContextMenu[]): INgxContextMenu[] {
        let someIcon: boolean = items.some(e => e.icon);
        return items.map(e => {
            if (someIcon && !e.icon) {
                e.icon = 'ngx-dummy';
            }
            return e;
        });
    }

	/** Событие закрытия контекстного меню */
	onMenuClosed() {
		this.onChangeState.emit(false);
	}

	/** Событие открытия контекстного меню */
	onMenuOpened() {
        this.setContextMenuMinWidth();
		this.onChangeState.emit(true);
	}

    /** Метод устанавливающий минимальную ширину контекстного меню относительно элемента, который открывает меню */
    setContextMenuMinWidth() {
        let overlayBox = document.querySelector(".ngx-context-mat-menu-backdrop + .cdk-overlay-connected-position-bounding-box .ngx-context-mat-menu");
        if (this.menuTriggerEl?.nativeElement && overlayBox !== null) {
            overlayBox.setAttribute("style", `min-width: ${this.menuTriggerEl?.nativeElement.offsetWidth}px;`);
        }
    }

    /** Событие на клик родительского элемента, который активирует открытие списка контекстного меню */
    onDropdownButtonClick(e: any) {

    }

    /** Событие клика на элемент пункта списка */
    onListItemClick(item: INgxContextMenu) {
        this.onItemClick.emit(item);
    }

}
