import { Component, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import { NgxTabComponent } from './tab/tab.component';
@Component({
    selector: 'ngx-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export class NgxTabsComponent implements AfterContentInit {
    @ContentChildren(NgxTabComponent) tabs!: QueryList<NgxTabComponent>;

    constructor() {}

    ngAfterContentInit() {
        const activeTabs = this.tabs?.filter((tab) => tab.active);
        if (activeTabs?.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    selectTab(tab: NgxTabComponent | undefined) {
        this.tabs?.toArray().forEach((tab) => (tab.active = false));
        if (tab) {
            tab.active = true;
        }
    }
}
