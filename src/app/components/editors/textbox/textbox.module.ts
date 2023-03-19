import { FormsModule } from '@angular/forms';
import { NgxTextBoxComponent } from './textbox.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxButtonModule } from '../../ui/button/button.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { LazyTransitionDirectiveModule } from 'src/app/directives/lazy-transition.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatTooltipModule,
        MatIconModule,
        NgxButtonModule,
        LazyTransitionDirectiveModule
    ],
    declarations: [NgxTextBoxComponent],
    exports: [NgxTextBoxComponent]
})

export class NgxTextBoxModule {

}