import { AfterContentInit, Component, ContentChildren, Input, QueryList, forwardRef } from '@angular/core';
import { NgxRadioButtonComponent } from './radiobutton/radio-button.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

let nextId = 0;

@Component({
    selector: 'ngx-radio-group',
    templateUrl: './radiogroup.component.html',
    styleUrls: ['./radiogroup.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxRadioGroupComponent),
            multi: true
        }
    ]
})
export class NgxRadioGroupComponent implements AfterContentInit {
    /** Ссылка на список шаблонов радиокнопок */
    @ContentChildren(NgxRadioButtonComponent) radioButtons!: QueryList<NgxRadioButtonComponent>;

    /** Уникальный идентификатор для назначения ключей радиокнопок */
    private static uniqueId: number = 0;

    /** Подпись инпута */
    @Input() label: string = '';

    /** Статус обязательного объекта */
    @Input() required: boolean = false;

    /** Поле name для радиокнопки */
    @Input() name: string = 'ngx-radio-group-' + NgxRadioGroupComponent.uniqueId++;

    /** Поле id для радиокнопки */
    @Input() id: string = '';
    
    /** Содержит текущее значение (модель) радиогруппы (также принимает props 'value') */
    @Input('value') model: string = '';

    constructor() {}

    ngAfterContentInit() {
        // При инициализации контента всех внутренних радиокнопок группы подписываемся на изменение их value
        this.radioButtons.toArray().forEach((radio, index) => {
            setTimeout(() => {
                radio.name = this.name
                radio.id = this.name + '-' + index;
            }, 50);
            radio.modelChanged$.subscribe(model => {
                this.updateRadioButtonsModel(model);
                this.onChange(model);
            })
        })
    }

    /** Обновить значения модели каждой вложенной в группу радиокнопки */
    updateRadioButtonsModel(model: string): void {
        this.radioButtons.toArray().forEach(radio => {
            radio.model = model;
        });
    }

    /** Вызывается, когда модель была изменена */
    onChange: (_: any) => void = (_: any) => {};

    /** Вызывается, когда модель была затронута */
    onTouched: () => void = () => {};

    /**
     * Записывает изначальное значение в поле.
     * @param model значение
     */
    writeValue(model: string): void {
        if (model !== null) {
            this.model = model;
            this.updateRadioButtonsModel(this.model);
        }
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
