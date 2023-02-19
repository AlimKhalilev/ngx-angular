import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ngx-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss']
})
export class NgxTagComponent {

	/** Событие клика на крести в тэге */
	@Output() onClose = new EventEmitter();
}
