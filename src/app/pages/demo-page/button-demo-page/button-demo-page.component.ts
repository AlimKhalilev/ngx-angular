import { Component } from '@angular/core';

@Component({
    selector: 'app-button-demo-page',
    templateUrl: './button-demo-page.component.html',
    styleUrls: ['./button-demo-page.component.scss', '../demo-page.component.scss']
})
export class ButtonDemoPageComponent {
    buttonClicked() {
        console.log('Кликнули на кнопку');
    }
}
