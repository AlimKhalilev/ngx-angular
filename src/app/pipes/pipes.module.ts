import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { PluralDeclensionPipe } from './plural-declension.pipe';

@NgModule({
    declarations: [SafePipe, PluralDeclensionPipe],
    imports: [CommonModule],
    exports: [SafePipe, PluralDeclensionPipe]
})
export class PipesModule {}
