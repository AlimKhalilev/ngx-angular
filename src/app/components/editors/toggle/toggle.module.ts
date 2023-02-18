import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxToggleComponent } from './toggle.component';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [NgxToggleComponent],
    imports: [CommonModule, MatTooltipModule, FormsModule],
    exports: [NgxToggleComponent]
})
export class NgxToggleModule {}
