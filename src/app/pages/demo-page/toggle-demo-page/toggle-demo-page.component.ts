import { Component } from '@angular/core';

@Component({
    selector: 'app-toggle-demo-page',
    templateUrl: './toggle-demo-page.component.html',
    styleUrls: ['./toggle-demo-page.component.scss', '../demo-page.component.scss']
})
export class ToggleDemoPageComponent {
    toggleDisabled: boolean = true;
    toggleValue: boolean = false;

    toggleValueChanged(value: boolean) {
        console.log(value);
    }
}
