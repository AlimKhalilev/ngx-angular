import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
    selector: '[isEllipsisActive]'
})
export class IsEllipsisActiveDirective implements AfterViewInit {
    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
        setTimeout(() => {
            const element = this.elementRef.nativeElement;
            console.log(element);
            if (element.offsetWidth < element.scrollWidth) {
                console.log("earasd");
                
                element.title = element.innerHTML;
            }
        }, 500);
    }
}
