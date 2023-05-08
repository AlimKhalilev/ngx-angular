import { Component } from '@angular/core';

@Component({
    selector: 'app-checkbox-demo-page',
    templateUrl: './checkbox-demo-page.component.html',
    styleUrls: ['./checkbox-demo-page.component.scss', '../demo-page.component.scss']
})
export class CheckboxDemoPageComponent {
    checkBoxDisabled: boolean = true;
    checkBoxValue: boolean = false;
    isIndeterminate: boolean = true;

    checkBoxValueChange(state: boolean) {
        console.log(state);
    }
}
