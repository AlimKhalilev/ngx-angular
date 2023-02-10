import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'ngx-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ["./checkbox.component.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxCheckboxComponent),
            multi: true
        }
    ]
})
export class NgxCheckboxComponent {
	/** Статус неопределенности чекбокса (в группе) (прим. 'Выбрать все') */
	@Input() indeterminate!: boolean;

	/** Статус неактивного чекбокса */
	@Input() disabled: boolean | undefined;

	/** Всплывающая подсказка чекбокса */
	@Input() tooltip: string | undefined;

    /** Содержит текущее значение (модель) чекбокса (также принимает props 'checked') */
    @Input('checked') model: boolean = false;

    /** Вызывается, когда модель была изменена */
    onChange: (_: any) => void = (_: any) => {};

    /** Вызывается, когда модель была затронута */
    onTouched: () => void = () => {};

    constructor() {}

    /** Метод, который вызывается при обновлении модели */
    updateChanges() {
        // если статус неопределенности в момент изменения чекбокса - вырубаем этот статус
        if (this.indeterminate) {
            this.indeterminate = false;
        }
        this.onChange(this.model);
    }

    /**
     * Записывает изначальное значение в поле.
     * @param model значение
     */
    writeValue(model: boolean): void {
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

