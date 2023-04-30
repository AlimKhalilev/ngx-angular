import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Хранение кастомных Material иконок
*/
@Injectable({
	providedIn: 'root',
})
export class CustomIconService {
    constructor(private matIconRegistry: MatIconRegistry, private sanitize: DomSanitizer) {}

    /** Регистрация кастомных иконок */
	registerIcons() {
        let fromPath = this.sanitize.bypassSecurityTrustResourceUrl;

        // Пустышка (для прозрачной иконки)
        this.matIconRegistry.addSvgIcon('ngx-dummy', fromPath('assets/ngx-icons/ngx-dummy.svg'));

        // Основной список иконок по размерам
        [
            'ngx-chevron-12',

            'ngx-arrow-right-16',
            'ngx-chevron-16',
            'ngx-chevron-double-16',
            'ngx-clipboard-link-16',
            'ngx-dismiss-16',
            'ngx-eye-16',
            'ngx-eye-off-16',
            'ngx-star-16',
            'ngx-star-fill-16',

            'ngx-add-circle-20',
            'ngx-checkmark-20',
            'ngx-chevron-20',
            'ngx-close-20',
            'ngx-copy-20',
            'ngx-dash-20',
            'ngx-delete-20',
            'ngx-dismiss-20',
            'ngx-full-screen-20',
            'ngx-maximize-20',
            'ngx-minimize-20',
            'ngx-notepad-edit-20',
            'ngx-search-20',
            'ngx-star-20',
            'ngx-star-fill-20',
            'ngx-table-settings-20',
        ]
        .forEach((e: string) => {
            this.matIconRegistry.addSvgIcon(e, fromPath(`assets/ngx-icons/${e.substring(e.length - 2)}/${e}.svg`));
        });

	}
}