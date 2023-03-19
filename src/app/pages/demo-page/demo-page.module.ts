import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoPageRoutingModule } from './demo-page-routing.module';
import { DemoPageComponent } from './demo-page.component';
import { EditorsModule } from 'src/app/components/editors/editors.module';
import { FormsModule } from '@angular/forms';
import { UiModule } from 'src/app/components/ui/ui.module';
import { MatMenuModule } from '@angular/material/menu';

import { TabsDemoPageComponent } from './tabs-demo-page/tabs-demo-page.component';
import { ButtonDemoPageComponent } from './button-demo-page/button-demo-page.component';
import { TagDemoPageComponent } from './tag-demo-page/tag-demo-page.component';
import { ListItemDemoPageComponent } from './list-item-demo-page/list-item-demo-page.component';
import { DropdownDemoPageComponent } from './dropdown-demo-page/dropdown-demo-page.component';
import { TextboxDemoPageComponent } from './textbox-demo-page/textbox-demo-page.component';
import { CheckboxDemoPageComponent } from './checkbox-demo-page/checkbox-demo-page.component';
import { ToggleDemoPageComponent } from './toggle-demo-page/toggle-demo-page.component';
import { RadioDemoPageComponent } from './radio-demo-page/radio-demo-page.component';
import { TreeViewDemoPageComponent } from './tree-view-demo-page/tree-view-demo-page.component';
import { AccordionDemoPageComponent } from './accordion-demo-page/accordion-demo-page.component';
import { TileViewDemoPageComponent } from './tile-view-demo-page/tile-view-demo-page.component';

@NgModule({
    declarations: [
        DemoPageComponent,
        TabsDemoPageComponent,
        ButtonDemoPageComponent,
        TagDemoPageComponent,
        ListItemDemoPageComponent,
        DropdownDemoPageComponent,
        TextboxDemoPageComponent,
        CheckboxDemoPageComponent,
        ToggleDemoPageComponent,
        RadioDemoPageComponent,
        TreeViewDemoPageComponent,
        TileViewDemoPageComponent,
        AccordionDemoPageComponent
    ],
    imports: [CommonModule, DemoPageRoutingModule, FormsModule, EditorsModule, UiModule, MatMenuModule],
    exports: []
})
export class DemoPageModule {}
