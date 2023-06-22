import { Component } from '@angular/core';

@Component({
    selector: 'app-textbox-demo-page',
    templateUrl: './textbox-demo-page.component.html',
    styleUrls: ['./textbox-demo-page.component.scss', '../demo-page.component.scss']
})
export class TextboxDemoPageComponent {
    textBoxValue: string = 'Тест';
    textBoxValueBase: string = 'Значение';
    textBoxPhone: string = '';

    textBoxBtnClick() {
        console.log('кликнули в текстинпуте');
    }

    textBoxValueBaseChanged(val: string) {
        console.log(val);
    }
}
