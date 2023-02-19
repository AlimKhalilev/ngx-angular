import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTagComponent } from './tag.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [NgxTagComponent],
    imports: [CommonModule, MatIconModule],
    exports: [NgxTagComponent]
})
export class NgxTagModule {}
