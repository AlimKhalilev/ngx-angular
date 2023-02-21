import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTabsComponent } from './tabs.component';
import { NgxTabComponent } from './tab/tab.component';

@NgModule({
    imports: [CommonModule],
    declarations: [NgxTabsComponent, NgxTabComponent],
    exports: [NgxTabsComponent, NgxTabComponent]
})
export class TabsModule {}
