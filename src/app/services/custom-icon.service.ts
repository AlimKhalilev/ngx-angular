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
        // 12

        this.matIconRegistry.addSvgIcon(
            'ngx-chevron-12',
            this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/12/ngx-chevron-12.svg')
        ) 


        // 16

        this.matIconRegistry.addSvgIcon(
			'ngx-dismiss-16',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/16/ngx-dismiss-16.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-arrow-right-16',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/16/ngx-arrow-right-16.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-chevron-16',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/16/ngx-chevron-16.svg')
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
			'ngx-chevron-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-chevron-20.svg')
		)      
        this.matIconRegistry.addSvgIcon(
			'ngx-tree-building-multiple-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/tree/ngx-building-multiple-20.svg')
		)
        this.matIconRegistry.addSvgIcon(
			'ngx-tree-database-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/tree/ngx-database-20.svg')
		)
        this.matIconRegistry.addSvgIcon(
			'ngx-tree-people-community-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/tree/ngx-people-community-20.svg')
		)
        this.matIconRegistry.addSvgIcon(
			'ngx-tree-people-group-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/tree/ngx-people-group-20.svg')
		)
        this.matIconRegistry.addSvgIcon(
			'ngx-tree-server-multiply-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/tree/ngx-server-multiply-20.svg')
		)
        this.matIconRegistry.addSvgIcon(
			'ngx-tree-window-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/tree/ngx-window-20.svg')
		)
        this.matIconRegistry.addSvgIcon(
			'ngx-close-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-close-20.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-search-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-search-20.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-checkmark-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-checkmark-20.svg')
		) 
        this.matIconRegistry.addSvgIcon(
			'ngx-dash-20',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/20/ngx-dash-20.svg')
		)
	}
}