import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTileViewComponent } from './tile-view.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxContextMenuModule } from '../context-menu/context-menu.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [NgxTileViewComponent],
    imports: [CommonModule, MatIconModule, NgxContextMenuModule, MatTooltipModule],
    exports: [NgxTileViewComponent]
})
export class NgxTileViewModule {}
