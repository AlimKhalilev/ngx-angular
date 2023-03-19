import { Component } from '@angular/core';

@Component({
    selector: 'app-radio-demo-page',
    templateUrl: './radio-demo-page.component.html',
    styleUrls: ['./radio-demo-page.component.scss']
})
export class RadioDemoPageComponent {
    radioButtonValue: string = '';
    radioButtonList: string[] = ['blue', 'yellow', 'red'];

    radioButtonNewValue: string = '';
    radioButtonNewList: string[] = ['blue', 'yellow', 'red'];
}
