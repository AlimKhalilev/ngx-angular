import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioCardComponent } from './portfolio-card.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
    declarations: [PortfolioCardComponent],
    imports: [CommonModule, PipesModule],
    exports: [PortfolioCardComponent]
})
export class PortfolioCardModule {}
