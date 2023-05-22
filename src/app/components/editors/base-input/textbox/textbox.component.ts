import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxTextBoxType, NgxTextBoxTypePasswordIcon } from './textbox.model';
import { NgxBaseInputComponent } from '../base-input.component';

@Component({
    selector: 'ngx-textbox',
    templateUrl: './textbox.component.html',
    styleUrls: ['../base-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxTextBoxComponent),
            multi: true
        }
    ]
})
export class NgxTextBoxComponent extends NgxBaseInputComponent implements OnInit {
    /** Ссылка на Enum типов инпута для использования в шаблоне */
    ngxTextBoxType = NgxTextBoxType;

    /** Type input элемента */
    @Input() type: NgxTextBoxType = NgxTextBoxType.TEXT;

    /** Иконка для кастомной кнопки */
    @Input() btnIcon: string = '';

    /** Флаг инпута с изменением типа (type = password/text) */
    @Input() passwordSwitch: boolean = false;

    /** Событие клика на кастомную кнопку */
    @Output() onBtnClick = new EventEmitter();

    /** Текущая иконка кнопки переключения типа инпута (type = password/text) */
    passwordSwitchIcon: string = '';

    constructor() {
        super();
    }

    ngOnInit(): void {
        // Если передан флаг переключателя пароля -> подготавливаем данные под него
        if (this.passwordSwitch) {
            this.type = NgxTextBoxType.PASSWORD;
            this.passwordSwitchIcon = NgxTextBoxTypePasswordIcon.EYE_OFF;
        }
    }

    /** Изменить type поля инпута (password / text) */
    public switchTypePassword() {
        this.type = this.type === NgxTextBoxType.TEXT ? NgxTextBoxType.PASSWORD : NgxTextBoxType.TEXT;
        this.passwordSwitchIcon = this.type === NgxTextBoxType.TEXT ? NgxTextBoxTypePasswordIcon.EYE : NgxTextBoxTypePasswordIcon.EYE_OFF;
    }
}
