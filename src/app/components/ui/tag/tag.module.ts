import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTagComponent } from './tag.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [NgxTagComponent],
    imports: [CommonModule, MatIconModule, MatTooltipModule],
    exports: [NgxTagComponent]
})
export class NgxTagModule {}
