import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {
    constructor() {}

    /** Метод получения ресурса для картинка (ссылка или base64) */
    public getPictureSrc(path: string | null | undefined): string {
        let src = '';
        if (path) {
            try {
                window.atob(path);
                src = `data:image/jpg;base64,${path}`;
            } catch (e) {
                src = path;
            }
        }
        return src;
    }
}
