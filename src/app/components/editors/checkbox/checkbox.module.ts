import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxCheckboxComponent } from './checkbox.component';
import { FormsModule } from '@angular/forms';
import { LazyTransitionDirectiveModule } from 'src/app/directives/lazy-transition.directive';

/**
 * Модуль компонента чекбокса
*/
@NgModule({
	imports: [CommonModule, MatIconModule, MatTooltipModule, FormsModule, LazyTransitionDirectiveModule],
	declarations: [NgxCheckboxComponent],
	exports: [NgxCheckboxComponent],
})
export class NgxCheckboxModule {}
