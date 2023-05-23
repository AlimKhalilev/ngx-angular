import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxBaseInputComponent } from '../base-input.component';
import { NgxTextBoxPasswordIcon, NgxTextBoxType } from './textbox.model';

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
    /** Type input элемента */
    @Input() type: NgxTextBoxType = 'text';

    /** Иконка для кастомной кнопки */
    @Input() btnIcon: string = '';

    /** Флаг инпута с изменением типа (type = password/text) */
    @Input() passwordSwitch: boolean = false;

    /** Событие клика на кастомную кнопку */
    @Output() onBtnClick = new EventEmitter();

    /** Текущая иконка кнопки переключения типа инпута (type = password/text) */
    passwordSwitchIcon: NgxTextBoxPasswordIcon = 'ngx-eye-16';

    constructor() {
        super();
    }

    ngOnInit(): void {
        // Если передан флаг переключателя пароля -> подготавливаем данные под него
        if (this.passwordSwitch) {
            this.type = 'password';
            this.passwordSwitchIcon = 'ngx-eye-off-16';
        }
    }

    /** Изменить type поля инпута (password / text) */
    public switchTypePassword() {
        this.type = this.type === 'text' ? 'password' : 'text';
        this.passwordSwitchIcon = this.type === 'text' ? 'ngx-eye-16' : 'ngx-eye-off-16';
    }
}
