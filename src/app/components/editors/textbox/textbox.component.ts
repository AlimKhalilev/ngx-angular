import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'ngx-textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxTextBoxComponent),
            multi: true
        }
    ]
})
export class NgxTextBoxComponent implements ControlValueAccessor {
    /** Статус неактивной кнопки */
	@Input() disabled!: boolean;

    /** Опциональная ширина кнопки */
	@Input() width!: number;

	/** Всплывающая подсказка кнопки */
	@Input() tooltip!: string;

	/** Placeholder input элемента */
	@Input() placeholder!: string;

	/** Опциональная иконка в начале инпута */
	@Input() iconStart!: string;

    /** Иконка для кастомной кнопки */
	@Input() btnIcon!: string;

    /** Событие клика на кастомную кнопку */
	@Output() onBtnClick = new EventEmitter();

    /** Содержит текущее значение поля (работает как ngModel, а также как и props) */
    @Input() value: string = '';

    /** Вызывается, когда модель была изменена */
    onChange: (_: any) => void = (_: any) => {};

    /** Вызывается, когда модель была затронута */
    onTouched: () => void = () => {};

    constructor() {}

    /** Метод, который вызывается при обновлении модели */
    updateChanges() {
        this.onChange(this.value);
    }

    /**
     * Записывает изначальное значение в поле.
     * @param value значение
     */
    writeValue(value: string): void {
        this.value = value;
        this.onChange(this.value);
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
