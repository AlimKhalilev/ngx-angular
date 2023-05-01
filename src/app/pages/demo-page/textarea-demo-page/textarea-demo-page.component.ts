import { Component } from '@angular/core';

@Component({
    selector: 'app-textarea-demo-page',
    templateUrl: './textarea-demo-page.component.html',
    styleUrls: ['./textarea-demo-page.component.scss']
})
export class TextAreaDemoPageComponent {
    textAreaValue: string = 'Тест';

    textAreaValueChanged(val: string) {
        console.log(val);
    }
}
