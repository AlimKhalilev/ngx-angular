import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoPageRoutingModule } from './demo-page-routing.module';
import { DemoPageComponent } from './demo-page.component';
import { EditorsModule } from 'src/app/components/editors/editors.module';
import { FormsModule } from '@angular/forms';
import { UiModule } from 'src/app/components/ui/ui.module';

@NgModule({
    declarations: [DemoPageComponent],
    imports: [CommonModule, DemoPageRoutingModule, FormsModule, EditorsModule, UiModule]
})
export class DemoPageModule {}
