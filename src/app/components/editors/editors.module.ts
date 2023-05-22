import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTextBoxModule } from './base-input/textbox/textbox.module';
import { NgxCheckboxModule } from './base-checkbox/checkbox/checkbox.module';
import { NgxToggleModule } from './base-checkbox/toggle/toggle.module';
import { NgxRadioGroupModule } from './radiogroup/radiogroup.module';
import { NgxTextAreaModule } from './base-input/textarea/textarea.module';

@NgModule({
    imports: [CommonModule],
    exports: [NgxTextBoxModule, NgxTextAreaModule, NgxCheckboxModule, NgxRadioGroupModule, NgxToggleModule],
})
export class EditorsModule {}
