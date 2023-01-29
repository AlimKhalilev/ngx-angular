import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioPageRoutingModule } from './portfolio-page-routing.module';
import { PortfolioPageComponent } from './portfolio-page.component';
import { PipeModule } from 'src/app/pipes/pipe/pipe.module';

@NgModule({
    declarations: [PortfolioPageComponent],
    imports: [CommonModule, PortfolioPageRoutingModule, PipeModule],
})
export class PortfolioPageModule {}
