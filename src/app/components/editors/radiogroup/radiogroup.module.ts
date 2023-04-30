import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxRadioGroupComponent } from './radiogroup.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { NgxRadioButtonComponent } from './radiobutton/radio-button.component';

/**
 * Модуль компонента группы радио кнопок
*/
@NgModule({
	imports: [CommonModule, MatIconModule, MatTooltipModule, FormsModule],
	declarations: [NgxRadioButtonComponent, NgxRadioGroupComponent],
	exports: [NgxRadioButtonComponent, NgxRadioGroupComponent],
})
export class NgxRadioGroupModule {}
