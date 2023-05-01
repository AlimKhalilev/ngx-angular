import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { NgxTextBoxType, NgxTextBoxTypePasswordIcon } from './textbox.model';

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
    /** Ссылка на Enum типов инпута для использования в шаблоне */
    ngxTextBoxType = NgxTextBoxType;

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

    /** Текст ошибки поля */
    @Input() errorMsg: string = '';

    /** Поле id для инпута */
    @Input() id: string = 'ngx-textbox-' + NgxTextBoxComponent.uniqueId++;

    /** Подпись инпута */
    @Input() label: string = '';

    /** Type input элемента */
    @Input() type: NgxTextBoxType = NgxTextBoxType.TEXT;

    /** Задержка в мс для изменения модели инпута */
    @Input() debounce: number = 50;

    /** Опциональная иконка в начале инпута */
    @Input() iconStart: string = '';

    /** Иконка для кастомной кнопки */
    @Input() btnIcon: string = '';

    /** Флаг инпута с изменением типа (type = password/text) */
    @Input() passwordSwitch: boolean = false;

    /** Количество строк (рядов) (для type = textarea) */
    @Input() rows: number = 2;

    /** Минимальное количество строк при autoresize (рядов) (для type = textarea) */
    @Input() minRows: number = 1;

    /** Максимальное количество строк при autoresize (рядов) (для type = textarea) */
    @Input() maxRows: number = 2;

    /** Флаг возможности autoresize (для type = textarea) */
    @Input() autoresize: boolean = false;

    /** Содержит текущее значение (модель) инпута (также принимает props 'value') */
    @Input('value') model: string = '';

    /** Событие клика на кастомную кнопку */
    @Output() onBtnClick = new EventEmitter();

    /** Вызывается, когда модель была изменена */
    onChange: (_: any) => void = (_: any) => {};

    /** Вызывается, когда модель была затронута */
    onTouched: () => void = () => {};

    /** Подписка на изменение значения модели */
    modelChanged$ = new Subject<string>();

    /** Текущая иконка кнопки переключения типа инпута (type = password/text) */
    passwordSwitchIcon: string = '';

    /** Ссылка на DOM Element инпута */
    inputElement: Element | null = null;

    constructor() {
        this.modelChanged$.pipe(debounceTime(this.debounce), distinctUntilChanged()).subscribe((value: string) => {
            this.updateModel(value);
        });
    }

    ngOnInit(): void {
        // Если передан флаг переключателя пароля -> подготавливаем данные под него
        if (this.passwordSwitch) {
            this.type = NgxTextBoxType.PASSWORD;
            this.passwordSwitchIcon = NgxTextBoxTypePasswordIcon.EYE_OFF;
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

    /** Изменить type поля инпута (password / text) */
    public switchTypePassword() {
        this.type = this.type === NgxTextBoxType.TEXT ? NgxTextBoxType.PASSWORD : NgxTextBoxType.TEXT;
        this.passwordSwitchIcon = this.type === NgxTextBoxType.TEXT ? NgxTextBoxTypePasswordIcon.EYE : NgxTextBoxTypePasswordIcon.EYE_OFF;
    }

    /** Очистка поля ввода по клику на крестик */
    public clearField() {
        this.updateModel('');
        if (this.type === NgxTextBoxType.TEXTAREA && this.autoresize) {
            this.emitElementInputEvent();
        }
    }

    /** Эмитация события :input у элемента (для срабатывания autoresize textarea) */
    private emitElementInputEvent() {
        if (this.inputElement === null) {
            this.inputElement = document.querySelector(`#${this.id}`);
        }
        setTimeout(() => this.inputElement?.dispatchEvent(new Event('input')), 0);
    }
}
