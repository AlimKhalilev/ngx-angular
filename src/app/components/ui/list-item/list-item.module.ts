import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxListItemComponent } from './list-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [NgxListItemComponent],
    imports: [CommonModule, MatIconModule, MatTooltipModule],
    exports: [NgxListItemComponent]
})
export class NgxListItemModule {}
