import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxBaseCheckboxComponent } from '../base-checkbox.component';

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
export class NgxCheckboxComponent extends NgxBaseCheckboxComponent {
    /** Статус неопределенности чекбокса (в группе) (прим. 'Выбрать все') */
	@Input() indeterminate: boolean = false;

    constructor() {
        super();
    }

    /** Метод, который вызывается при обновлении модели */
    override updateModel(model: boolean) { 
        // если статус неопределенности в момент изменения чекбокса - вырубаем этот статус
        if (this.indeterminate) {
            this.indeterminate = false;
        }
        this.model = model;
        this.onChange(this.model);
    }
}

