import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionDemoPageComponent } from './accordion-demo-page/accordion-demo-page.component';
import { ButtonDemoPageComponent } from './button-demo-page/button-demo-page.component';
import { CheckboxDemoPageComponent } from './checkbox-demo-page/checkbox-demo-page.component';
import { DemoPageComponent } from './demo-page.component';
import { DropdownDemoPageComponent } from './dropdown-demo-page/dropdown-demo-page.component';
import { ListItemDemoPageComponent } from './list-item-demo-page/list-item-demo-page.component';
import { RadioDemoPageComponent } from './radio-demo-page/radio-demo-page.component';
import { TabsDemoPageComponent } from './tabs-demo-page/tabs-demo-page.component';
import { TagDemoPageComponent } from './tag-demo-page/tag-demo-page.component';
import { TextboxDemoPageComponent } from './textbox-demo-page/textbox-demo-page.component';
import { TileViewDemoPageComponent } from './tile-view-demo-page/tile-view-demo-page.component';
import { ToggleDemoPageComponent } from './toggle-demo-page/toggle-demo-page.component';
import { TreeViewDemoPageComponent } from './tree-view-demo-page/tree-view-demo-page.component';

export const demoRoutes: Routes = [
    { path: 'tabs', component: TabsDemoPageComponent },
    { path: 'button', component: ButtonDemoPageComponent },
    { path: 'tag', component: TagDemoPageComponent },
    { path: 'list-item', component: ListItemDemoPageComponent },
    { path: 'dropdown', component: DropdownDemoPageComponent },
    { path: 'textbox', component: TextboxDemoPageComponent },
    { path: 'checkbox', component: CheckboxDemoPageComponent },
    { path: 'radio', component: RadioDemoPageComponent },
    { path: 'toggle', component: ToggleDemoPageComponent },
    { path: 'accordion', component: AccordionDemoPageComponent },
    { path: 'tree-view', component: TreeViewDemoPageComponent },
    { path: 'tile-view', component: TileViewDemoPageComponent }
]

export const routes: Routes = [
    { 
        path: '', 
        component: DemoPageComponent, 
        children: demoRoutes
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DemoPageRoutingModule {}
