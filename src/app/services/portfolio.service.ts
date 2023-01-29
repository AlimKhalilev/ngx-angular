import { HttpClient, HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, share, shareReplay, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface IPortfolio {
    id: number,
    name: string,
    link: string,
    addDateTimestamp: number,
    addDateStr: string,
    description: string,
    img: string,
    imgWebp: string,
    imgMin: string,
    imgMinWebp: string,
}

@Injectable({
    providedIn: 'root'
})
export class PortfolioService {
    /** Observable кэша списка работ в портфолио */
    cachedPortfolio$!: Observable<IPortfolio[]>

    constructor(private http: HttpClient) {}

    /** Возвращает список работ в портфолио с сервака */
    getAll(): Observable<IPortfolio[]> {
        if (!this.cachedPortfolio$) {
            this.cachedPortfolio$ = this.http.get<IPortfolio[]>(environment.API + '/portfolio').pipe(
                shareReplay(1)
            );
        }
        return this.cachedPortfolio$;
    }
}
