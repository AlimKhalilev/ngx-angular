import { Component } from '@angular/core';

@Component({
    selector: 'app-demo-page',
    templateUrl: './demo-page.component.html',
    styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent {
    selectBoxValue: string = 'Тест';

    checkBoxDisabled: boolean = true;
    checkBoxValue: boolean = false;
    isIndeterminate: boolean = true;

    radioButtonValue: string = '';
    radioButtonList: string[] = ['blue', 'yellow', 'red'];

    buttonClicked() {
        console.log('Кликнули на кнопку');
    }
}
