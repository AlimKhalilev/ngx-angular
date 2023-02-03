import { Component, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';
import TabComponent from './tab/tab.component';

@Component({
    selector: 'ngx-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})
export default class TabsComponent implements AfterContentInit {
    @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

    constructor() {}

    ngAfterContentInit() {
        const activeTabs = this.tabs?.filter((tab) => tab.active);
        if (activeTabs?.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }

    selectTab(tab: TabComponent | undefined) {
        this.tabs?.toArray().forEach((tab) => (tab.active = false));
        if (tab) {
            tab.active = true;
        }
    }
}
