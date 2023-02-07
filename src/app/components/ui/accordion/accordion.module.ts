import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [AccordionComponent],
    imports: [CommonModule, MatIconModule],
    exports: [AccordionComponent]
})
export class AccordionModule {}
