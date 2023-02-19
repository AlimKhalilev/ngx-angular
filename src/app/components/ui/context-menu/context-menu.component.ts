import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { INgxListItem } from '../list-item/list-item.component';

/** Интерфейс входных данных компонента контекстного меню */
export interface INgxContextMenu extends INgxListItem {
    borderBottom?: boolean;
    onClick?: () => void;
    children?: INgxContextMenu[];
}

@Component({
    selector: 'ngx-context-menu',
    templateUrl: './context-menu.component.html',
    styleUrls: ['./context-menu.component.scss']
})
export class NgxContextMenuComponent {
    /** Входные параметры элементов в меню */
	@Input() items!: INgxContextMenu[];

	/** Флаг открытия меню по клику правой кнопкой мыши */
	@Input() rightClickOpen: boolean = false;

    /** Событие открытия, либо закрытия контекстного меню (true - открыто, false - закрыто) */
	@Output() onChangeState: EventEmitter<boolean> = new EventEmitter<boolean>();

    /** Получаем ссылку на меню для его повторного открытия по рекурсии */
	@ViewChild('childMenu', { static: true }) public childMenu: any;

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
		this.onChangeState.emit(true);
	}

    onDropdownButtonClick(e: any) {

    }

}
