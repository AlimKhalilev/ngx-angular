import { NgModule } from '@angular/core';
import TabsComponent from './tabs.component';
import { CommonModule } from '@angular/common';
import TabComponent from './tab/tab.component';

@NgModule({
    imports: [CommonModule],
    declarations: [TabsComponent, TabComponent],
    exports: [TabsComponent, TabComponent]
})
export class TabsModule {}
