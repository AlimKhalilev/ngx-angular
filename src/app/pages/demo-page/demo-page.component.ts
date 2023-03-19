import { Component } from '@angular/core';
import { NavigationEnd, Router, Routes, RoutesRecognized } from '@angular/router';
import { demoRoutes } from './demo-page-routing.module';

@Component({
    selector: 'app-demo-page',
    templateUrl: './demo-page.component.html',
    styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent {
    demoRoutes: Routes = demoRoutes;
    currentRouteUrl: string = '';
    
    constructor(private router: Router) {
        this.router.events.subscribe((e) => {
            if (e instanceof NavigationEnd) {
                this.currentRouteUrl = e.url;
            }
        });

        this.router.events.subscribe((data) => {
            if (data instanceof RoutesRecognized) {
                //console.log(data.state.root.firstChild);
            }
        });
    }

    /** Содержит ли текущий роут подстроку из передаваемого параметра */
    isCurrentRoute(name: string | undefined): boolean {
        return name ? this.currentRouteUrl.includes(name) : false;
    }
}
