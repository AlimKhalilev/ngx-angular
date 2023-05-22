import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'ngx-radio-button',
	templateUrl: './radio-button.component.html',
	styleUrls: ["../../base-checkbox/checkbox/checkbox.component.scss", "./radio-button.component.scss"]
})
export class NgxRadioButtonComponent {
    /** Статус неактивности объекта */
	@Input() disabled: boolean = false;

    /** Статус обязательного объекта */
	@Input() required: boolean = false;

    /** Значение текущей радио кнопки */
	@Input() value: string = '';

	/** Всплывающая подсказка чекбокса */
	@Input() tooltip: string = '';

    /** Содержит текущее значение (модель) радиокнопки */
    @Input() model: string = '';

    /** Флаг checked у радиокнопки (если отсутствует модель) */
    @Input() checked: boolean = false;

    /** Поле name для радиокнопки */
    @Input() name: string = '';

    /** Поле id для радиокнопки */
    @Input() id: string = '';

    /** Подписка на изменение значения модели радиокнопки */
    modelChanged$ = new Subject<string>();

    /** Событие изменения поля радиокнопки */
    onChange(event: Event) {
        this.modelChanged$.next((event.target as HTMLInputElement).value);
    }
}

