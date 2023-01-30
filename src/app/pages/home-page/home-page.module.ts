import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { PortfolioCardModule } from "../../components/portfolio-card/portfolio-card.module";


@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        PortfolioCardModule
    ]
})
export class HomePageModule { }
