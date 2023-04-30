import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxToggleComponent } from './toggle.component';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LazyTransitionDirectiveModule } from 'src/app/directives/lazy-transition.directive';

@NgModule({
    declarations: [NgxToggleComponent],
    imports: [CommonModule, MatTooltipModule, FormsModule, LazyTransitionDirectiveModule],
    exports: [NgxToggleComponent]
})
export class NgxToggleModule {}
