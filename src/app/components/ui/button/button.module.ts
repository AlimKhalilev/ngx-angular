import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxButtonComponent } from './button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LazyTransitionDirectiveModule } from 'src/app/directives/lazy-transition.directive';

/**
 * Модуль компонента кнопки
*/
@NgModule({
	imports: [CommonModule, MatIconModule, MatTooltipModule, LazyTransitionDirectiveModule],
	declarations: [NgxButtonComponent],
	exports: [NgxButtonComponent],
})
export class NgxButtonModule {}
