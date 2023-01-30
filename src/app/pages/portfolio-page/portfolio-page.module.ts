import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageRoutingModule } from './portfolio-page-routing.module';
import { PortfolioPageComponent } from './portfolio-page.component';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
    declarations: [PortfolioPageComponent],
    imports: [CommonModule, PortfolioPageRoutingModule, PipesModule],
})
export class PortfolioPageModule {}
