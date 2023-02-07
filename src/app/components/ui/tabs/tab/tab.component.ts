import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export default class TabComponent {
    @Input() name: string = '';
    @Input() active: boolean = false;
}
