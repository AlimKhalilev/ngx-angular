import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxButtonComponent } from './button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

/**
 * Модуль компонента кнопки
*/
@NgModule({
	imports: [CommonModule, MatIconModule, MatTooltipModule],
	declarations: [NgxButtonComponent],
	exports: [NgxButtonComponent],
})
export class NgxButtonModule {}
