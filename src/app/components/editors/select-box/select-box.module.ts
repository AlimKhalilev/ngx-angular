import { FormsModule } from '@angular/forms';
import { SelectBoxComponent } from './select-box.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [SelectBoxComponent],
    exports: [SelectBoxComponent]
})

export class SelectBoxModule {

}