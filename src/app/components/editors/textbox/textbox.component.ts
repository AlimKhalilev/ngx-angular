import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

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
export class NgxTextBoxComponent implements ControlValueAccessor, OnInit {
    /** Статус неактивности объекта */
    @Input() disabled!: boolean;

    /** Статус обязательного объекта */
    @Input() required!: boolean;

    /** Опциональная ширина */
    @Input() width!: number;

    /** Всплывающая подсказка */
    @Input() tooltip!: string;

    /** Placeholder input элемента */
    @Input() placeholder!: string;

    /** Type input элемента */
    @Input() type: 'text' | 'email' | 'number' | 'tel' | 'search' | 'url' | 'password' = 'text';

    /** Задержка в мс для изменения модели инпута */
    @Input() debounce: number = 50;

    /** Опциональная иконка в начале инпута */
    @Input() iconStart!: string;

    /** Иконка для кастомной кнопки */
    @Input() btnIcon!: string;

    /** Флаг инпута с изменением типа (type = password/text) */
    @Input() passwordSwitch: boolean = false;

    /** Флаг наличия ошибки в поле */
    @Input() hasError: boolean = false;

    /** Событие клика на кастомную кнопку */
    @Output() onBtnClick = new EventEmitter();

    /** Содержит текущее значение (модель) инпута (также принимает props 'value') */
    @Input('value') model: string = '';

    /** Вызывается, когда модель была изменена */
    onChange: (_: any) => void = (_: any) => {};

    /** Вызывается, когда модель была затронута */
    onTouched: () => void = () => {};

    /** Подписка на изменение значения модели */
    modelChanged$ = new Subject<string>();

    /** Текущая иконка кнопки переключения типа инпута (type = password/text) */
    passwordSwitchIcon: string = '';

    constructor() {
        this.modelChanged$.pipe(debounceTime(this.debounce), distinctUntilChanged()).subscribe((value: string) => {
            this.updateModel(value);
        });
    }

    ngOnInit(): void {
        // Если передан флаг переключателя пароля -> подготавливаем данные под него
        if (this.passwordSwitch) {
            this.type = 'password';
            this.passwordSwitchIcon = 'ngx-eye-off-16';
        }
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

    toggleTypePassword() {
        this.type = this.type === 'text' ? 'password' : 'text';
        this.passwordSwitchIcon = this.type === 'text' ? 'ngx-eye-16' : 'ngx-eye-off-16';
    }
}
