import { Component, Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

/** Базовый компонент для компонентов checkbox и toggle */
@Component({
    selector: 'ngx-base-checkbox',
    template: ''
})
export class NgxBaseCheckboxComponent implements ControlValueAccessor {
    /** Подпись инпута */
    @Input() label: string = '';

    /** Статус обязательного объекта */
    @Input() required: boolean = false;

    /** Статус неактивности объекта */
    @Input() disabled: boolean = false;

    /** Всплывающая подсказка */
    @Input() tooltip: string = '';

    /** Содержит текущее значение (модель) чекбокса (также принимает props 'checked') */
    @Input('checked') model: boolean = false;

    /** Вызывается, когда модель была изменена */
    onChange: (_: any) => void = (_: any) => {};

    /** Вызывается, когда модель была затронута */
    onTouched: () => void = () => {};

    constructor() {}

    /** Метод, который вызывается при обновлении модели */
    updateModel(model: boolean) {
        this.model = model;
        this.onChange(this.model);
    }

    /**
     * Записывает изначальное значение в поле.
     * @param model значение
     */
    writeValue(model: boolean): void {
        this.model = model;
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