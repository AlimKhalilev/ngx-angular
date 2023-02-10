import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTextBoxModule } from './textbox/textbox.module';
import { NgxCheckboxModule } from './checkbox/checkbox.module';
import { NgxRadioButtonModule } from './radiobutton/radio-button.module';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [NgxTextBoxModule, NgxCheckboxModule, NgxRadioButtonModule]
})
export class EditorsModule {}
