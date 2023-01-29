import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IPortfolio, PortfolioService } from 'src/app/services/portfolio.service';

@Component({
    selector: 'app-portfolio-page',
    templateUrl: './portfolio-page.component.html',
    styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent {
    works$: Observable<IPortfolio[]>;

    constructor(private portfolioService: PortfolioService) {
        this.works$ = this.portfolioService.getAll();
    }
}
