import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgxBaseCheckboxComponent } from '../base-checkbox.component';

@Component({
    selector: 'ngx-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxToggleComponent),
            multi: true
        }
    ]
})
export class NgxToggleComponent extends NgxBaseCheckboxComponent {
    constructor() {
        super();
    }
}
