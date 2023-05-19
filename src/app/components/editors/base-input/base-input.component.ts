import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

/** Базовый компонент для инпутов с полем ввода и textarea */
@Component({
    selector: 'ngx-base-input',
    template: ''
})
export class NgxBaseInputComponent implements ControlValueAccessor {
    /** Уникальный идентификатор для назначения ключей инпутов */
    private static uniqueId: number = 0;

    /** Статус неактивности объекта */
    @Input() disabled: boolean = false;

    /** Статус обязательного объекта */
    @Input() required: boolean = false;

    /** Опциональная ширина */
    @Input() width: number = 0;

    /** Всплывающая подсказка */
    @Input() tooltip: string = '';

    /** Placeholder input элемента */
    @Input() placeholder: string = '';

    /** Объект маски поля ввода */
    @Input() mask: {} = {};

    /** Текст ошибки поля */
    @Input() errorMsg: string = '';

    /** Поле id для инпута */
    @Input() id: string = 'ngx-base-input-' + NgxBaseInputComponent.uniqueId++;

    /** Подпись инпута */
    @Input() label: string = '';

    /** Задержка в мс для изменения модели инпута */
    @Input() debounce: number = 50;

    /** Опциональная иконка в начале инпута */
    @Input() iconStart: string = '';

    /** Содержит текущее значение (модель) инпута (также принимает props 'value') */
    @Input('value') model: string = '';

    /** Вызывается, когда модель была изменена */
    onChange: (_: any) => void = (_: any) => {};

    /** Вызывается, когда модель была затронута */
    onTouched: () => void = () => {};

    /** Подписка на изменение значения модели */
    modelChanged$ = new Subject<string>();

    constructor() {
        this.modelChanged$.pipe(debounceTime(this.debounce), distinctUntilChanged()).subscribe((value: string) => {
            this.updateModel(value);
        });
    }

    /** Метод, который вызывается при обновлении модели */
    updateModel(model: string) {
        this.model = model;
        this.onChange(this.model);
    }

    /**
     * Записывает значение в модель из UI.
     * @param value значение
     */
    writeValue(value: string): void {
        this.model = value;
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
