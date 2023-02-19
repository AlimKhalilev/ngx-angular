import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from './tabs/tabs.module';
import { AccordionModule } from './accordion/accordion.module';
import { NgxTreeViewModule } from './tree-view/tree-view.module';
import { NgxButtonModule } from './button/button.module';
import { NgxListItemModule } from './list-item/list-item.module';
import { NgxContextMenuModule } from './context-menu/context-menu.module';
import { NgxTagModule } from './tag/tag.module';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [TabsModule, AccordionModule, NgxTreeViewModule, NgxButtonModule, NgxListItemModule, NgxContextMenuModule, NgxTagModule]
})
export class UiModule {}
