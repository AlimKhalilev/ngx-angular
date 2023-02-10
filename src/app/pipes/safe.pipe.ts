import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl } from '@angular/platform-browser';

@Pipe({
    name: 'safe'
})
export class SafePipe implements PipeTransform {
    constructor(protected sanitizer: DomSanitizer) {}

    public transform(value: any, type: 'html' | 'res' | 'script' | 'style' | 'url'): SafeHtml | SafeResourceUrl | SafeScript | SafeStyle | SafeUrl {
        switch (type) {
            case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);
            case 'res':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);
            case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);
            case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);
            default:
                return this.sanitizer.bypassSecurityTrustHtml(value);
        }
    }
}