import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTextAreaComponent } from './textarea.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxButtonModule } from 'src/app/components/ui/button/button.module';
import { LazyTransitionDirectiveModule } from 'src/app/directives/lazy-transition.directive';
import { TextareaAutoresizeDirectiveModule } from 'src/app/directives/textarea-autoresize.directive';

@NgModule({
    declarations: [NgxTextAreaComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatTooltipModule,
        MatIconModule,
        NgxButtonModule,
        LazyTransitionDirectiveModule,
        TextareaAutoresizeDirectiveModule
    ],
    exports: [NgxTextAreaComponent]
})
export class NgxTextAreaModule {}
