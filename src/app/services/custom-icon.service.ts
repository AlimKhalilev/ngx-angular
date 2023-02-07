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
        // 16

        this.matIconRegistry.addSvgIcon(
			'ngx-close-16',
			this.sanitize.bypassSecurityTrustResourceUrl('assets/ngx-icons/16/ngx-close-16.svg')
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