import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'ngx-radio-button',
	templateUrl: './radio-button.component.html',
	styleUrls: ["../checkbox/checkbox.component.scss", "./radio-button.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxRadioButtonComponent),
            multi: true
        }
    ]
})
export class NgxRadioButtonComponent {
    /** Статус неактивности объекта */
	@Input() disabled!: boolean;

    /** Статус обязательного объекта */
	@Input() required!: boolean;

    /** Значение текущей радио кнопки */
	@Input() value!: string;

	/** Всплывающая подсказка чекбокса */
	@Input() tooltip!: string;

    /** Содержит текущее значение (модель) радиокнопки */
    model: string = '';

    /** Вызывается, когда модель была изменена */
    onChange: (_: any) => void = (_: any) => {};

    /** Вызывается, когда модель была затронута */
    onTouched: () => void = () => {};

    constructor() {}

    /** Метод, который вызывается при обновлении модели */
    updateChanges() {
        this.onChange(this.model);
    }

    /**
     * Записывает изначальное значение в поле.
     * @param model значение
     */
    writeValue(model: string): void {
        this.model = model;
        this.onChange(this.model);
    }

    /**
     * Регистрирует функцию обратного вызова, которую следует вызывать при изменении значения элемента управления в интерфейсе
     * @param fn callback функция
     */
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    /**
     * Регистрирует функцию обратного вызова, которую следует вызывать, когда элемент управления получает событие потери фокуса.
     * @param fn callback функция
     */
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

}

