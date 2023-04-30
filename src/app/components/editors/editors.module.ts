import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTextBoxModule } from './textbox/textbox.module';
import { NgxCheckboxModule } from './checkbox/checkbox.module';
import { NgxToggleModule } from './toggle/toggle.module';
import { NgxRadioGroupModule } from './radiogroup/radiogroup.module';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [NgxTextBoxModule, NgxCheckboxModule, NgxRadioGroupModule, NgxToggleModule]
})
export class EditorsModule {}
