import { Component } from '@angular/core';

@Component({
    selector: 'app-demo-page',
    templateUrl: './demo-page.component.html',
    styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent {
    textBoxValue: string = 'Тест';

    checkBoxDisabled: boolean = true;
    checkBoxValue: boolean = false;
    isIndeterminate: boolean = true;

    radioButtonValue: string = '';
    radioButtonList: string[] = ['blue', 'yellow', 'red'];

    radioButtonNewValue: string = '';
    radioButtonNewList: string[] = ['blue', 'yellow', 'red'];

    buttonClicked() {
        console.log('Кликнули на кнопку');
    }

    textBoxBtnClick() {
        console.log('кликнули в текстинпуте');
    }
}
