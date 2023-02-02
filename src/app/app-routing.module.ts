import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule) },
    { path: 'portfolio', loadChildren: () => import('./pages/portfolio-page/portfolio-page.module').then(m => m.PortfolioPageModule) },
    { path: 'demo', loadChildren: () => import('./pages/demo-page/demo-page.module').then(m => m.DemoPageModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
