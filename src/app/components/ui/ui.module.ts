import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from './tabs/tabs.module';
import { AccordionModule } from './accordion/accordion.module';
import { NgxTreeViewModule } from './tree-view/tree-view.module';
import { NgxButtonModule } from './button/button.module';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [TabsModule, AccordionModule, NgxTreeViewModule, NgxButtonModule]
})
export class UiModule {}
