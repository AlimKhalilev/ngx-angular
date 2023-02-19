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
    constructor(private matIconRegistry: MatIconRegistry, private sanitize: DomSanitizer) {

    }

    /** Регистрация кастомных иконок */
	registerIcons() {
        // Пустышка (для прозрачной иконки)
        this.matIconRegistry.addSvgIcon(
			'ngx-dummy',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/ngx-dummy.svg')
		)

        // 12

        this.matIconRegistry.addSvgIcon(
            'ngx-chevron-12',
            this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/12/ngx-chevron-12.svg')
        ) 


        // 16

        this.matIconRegistry.addSvgIcon(
			'ngx-arrow-right-16',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/16/ngx-arrow-right-16.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-chevron-16',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/16/ngx-chevron-16.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-chevron-double-16',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/16/ngx-chevron-16.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-clipboard-link-16',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/16/ngx-clipboard-link-16.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-dismiss-16',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/16/ngx-dismiss-16.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-star-16',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/16/ngx-star-16.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-star-fill-16',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/16/ngx-star-fill-16.svg')
		) 


        // 20

        this.matIconRegistry.addSvgIcon(
			'ngx-add-circle-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-add-circle-20.svg')
		)
        this.matIconRegistry.addSvgIcon(
			'ngx-checkmark-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-checkmark-20.svg')
		) 
		this.matIconRegistry.addSvgIcon(
			'ngx-chevron-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-chevron-20.svg')
		)  
        this.matIconRegistry.addSvgIcon(
			'ngx-close-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-close-20.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-copy-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-copy-20.svg')
		)
        this.matIconRegistry.addSvgIcon(
			'ngx-dash-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-dash-20.svg')
		)
        this.matIconRegistry.addSvgIcon(
			'ngx-delete-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-delete-20.svg')
		)
        this.matIconRegistry.addSvgIcon(
			'ngx-dismiss-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-dismiss-20.svg')
		)
        this.matIconRegistry.addSvgIcon(
			'ngx-full-screen-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-full-screen-20.svg')
		)
        this.matIconRegistry.addSvgIcon(
			'ngx-maximize-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-maximize-20.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-minimize-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-minimize-20.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-notepad-edit-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-notepad-edit-20.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-search-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-search-20.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-table-settings-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-table-settings-20.svg')
		)
	}
}