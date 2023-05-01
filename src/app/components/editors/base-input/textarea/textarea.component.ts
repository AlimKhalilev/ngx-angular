import { Component, Input, forwardRef } from '@angular/core';
import { NgxBaseInputComponent } from '../base-input.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'ngx-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['../base-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxTextAreaComponent),
            multi: true
        }
    ]
})
export class NgxTextAreaComponent extends NgxBaseInputComponent implements ControlValueAccessor {
    /** Количество строк (рядов) (для type = textarea) */
    @Input() rows: number = 1;

    /** Минимальное количество строк при autoresize (рядов) (для type = textarea) */
    @Input() minRows: number = 1;

    /** Максимальное количество строк при autoresize (рядов) (для type = textarea) */
    @Input() maxRows: number = 2;

    /** Флаг возможности autoresize (для type = textarea) */
    @Input() autoresize: boolean = false;

    /** Ссылка на DOM Element инпута */
    inputElement: Element | null = null;

    constructor() {
        super();
    }

    /** Очистка поля ввода по клику на крестик */
    public clearField() {
        this.updateModel('');
        if (this.autoresize) {
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
