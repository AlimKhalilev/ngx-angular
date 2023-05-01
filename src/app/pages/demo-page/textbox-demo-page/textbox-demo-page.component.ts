import { Component } from '@angular/core';
import { NgxTextBoxType } from 'src/app/components/editors/base-input/textbox/textbox.model';

@Component({
    selector: 'app-textbox-demo-page',
    templateUrl: './textbox-demo-page.component.html',
    styleUrls: ['./textbox-demo-page.component.scss']
})
export class TextboxDemoPageComponent {
    ngxTextBoxType = NgxTextBoxType;

    textBoxValue: string = 'Тест';
    textBoxValueBase: string = 'Значение';

    textBoxBtnClick() {
        console.log('кликнули в текстинпуте');
    }

    textBoxValueBaseChanged(val: string) {
        console.log(val);
    }
}
