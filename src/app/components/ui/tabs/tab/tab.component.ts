import { Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class NgxTabComponent {
    /** Заголовок таба */
    @Input() caption: string = '';

    /** Статус активного таба */
    @Input() active: boolean = false;

    /** Статус выключенного таба */
    @Input() disabled: boolean = false;

    /** Статус маркированного таба */
    @Input() marked: boolean = false;
}
