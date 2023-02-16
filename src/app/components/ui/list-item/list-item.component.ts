import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class NgxListItemComponent {
    
    /** Текст пункта списка */
	@Input() text: string = '';

    /** Краткое описание пункта списка */
	@Input() shortcut: string = '';

	/** Иконка пункта списка (список из matIcon или кастомные через matIconRegistry) */
	@Input() icon: string = '';

    /** Флаг пункта списка с стрелкой (шевроном) */
	@Input() chevron: boolean = false;

    /** Статус неактивного пункта списка */
	@Input() disabled: boolean = false;

    /** Всплывающая подсказка пункта списка */
	@Input() tooltip: string = '';

}
