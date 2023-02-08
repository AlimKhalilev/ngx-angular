import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from './tabs/tabs.module';
import { AccordionModule } from './accordion/accordion.module';
import { TreeViewModule } from './tree-view/tree-view.module';
import { NgxButtonModule } from './button/button.module';
import { NgxCheckboxModule } from './checkbox/checkbox.module';
import { NgxRadioButtonModule } from './radiobutton/radio-button.module';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [TabsModule, AccordionModule, TreeViewModule, NgxButtonModule, NgxCheckboxModule, NgxRadioButtonModule]
})
export class UiModule {}
