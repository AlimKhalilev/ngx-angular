import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxCheckboxComponent } from './checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Модуль компонента чекбокса
*/
@NgModule({
	imports: [CommonModule, MatIconModule, MatTooltipModule, FormsModule, ReactiveFormsModule],
	declarations: [NgxCheckboxComponent],
	exports: [NgxCheckboxComponent],
})
export class NgxCheckboxModule {}
