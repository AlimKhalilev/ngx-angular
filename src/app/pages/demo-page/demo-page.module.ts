import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoPageRoutingModule } from './demo-page-routing.module';
import { DemoPageComponent } from './demo-page.component';
import { EditorsModule } from 'src/app/components/editors/editors.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [DemoPageComponent],
    imports: [CommonModule, DemoPageRoutingModule, FormsModule, EditorsModule]
})
export class DemoPageModule {}
