import { Component } from '@angular/core';

@Component({
    selector: 'app-radio-group-demo-page',
    templateUrl: './radio-group-demo-page.component.html',
    styleUrls: ['./radio-group-demo-page.component.scss']
})
export class RadioGroupDemoPageComponent {
    radioButtonValue: string = '';
    radioButtonList: string[] = ['blue', 'yellow', 'red'];

    radioButtonNewValue: string = '';
    radioButtonNewList: string[] = ['blue', 'yellow', 'red'];
}
