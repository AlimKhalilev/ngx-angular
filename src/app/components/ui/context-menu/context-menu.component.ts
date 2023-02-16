import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'ngx-context-menu',
    templateUrl: './context-menu.component.html',
    styleUrls: ['./context-menu.component.scss']
})
export class NgxContextMenuComponent {
    /** Входные параметры элементов в меню */
	@Input() items: any;

	/** Флаг открытия меню по клику правой кнопкой мыши */
	@Input() rightClickOpen: boolean = false;

    /** Событие открытия, либо закрытия контекстного меню (true - открыто, false - закрыто) */
	@Output() contextMenuOpenCloseEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    /** Получаем ссылку на меню для его повторного открытия по рекурсии */
	@ViewChild('childMenu', { static: true }) public childMenu: any;

    constructor() {}

	/** Событие закрытия контекстного меню */
	onMenuClosed() {
		this.contextMenuOpenCloseEvent.emit(false);
	}

	/** Событие открытия контекстного меню */
	onMenuOpened() {
		this.contextMenuOpenCloseEvent.emit(true);
	}

    onDropdownButtonClick(e: any) {

    }

}
