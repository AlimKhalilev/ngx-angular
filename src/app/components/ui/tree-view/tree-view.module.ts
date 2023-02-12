import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTreeViewComponent } from './tree-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [NgxTreeViewComponent],
    imports: [CommonModule, MatIconModule, MatTooltipModule],
    exports: [NgxTreeViewComponent]
})
export class NgxTreeViewModule {}