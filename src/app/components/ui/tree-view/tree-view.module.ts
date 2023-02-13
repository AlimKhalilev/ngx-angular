import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTreeViewComponent } from './tree-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxTextBoxModule } from '../../editors/textbox/textbox.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [NgxTreeViewComponent],
    imports: [CommonModule, MatIconModule, NgxTextBoxModule, FormsModule, MatTooltipModule],
    exports: [NgxTreeViewComponent]
})
export class NgxTreeViewModule {}