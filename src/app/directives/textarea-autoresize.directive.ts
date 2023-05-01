import { Directive, ElementRef, HostListener, Input, NgModule, OnInit } from '@angular/core';

/** Добавляет возможность автоматического добавления высоты при переносе строки в textarea input */
@Directive({
    selector: '[textareaAutoresize]',
})
export class TextareaAutoresizeDirective implements OnInit {
    /** Флаг использования директивы */
    @Input() textareaAutoresize: boolean = false;

    /** Высота textarea при rows = 1 */
    initialHeight: number = 34;

    /** Шаг увеличение высоты textarea */
    stepHeight: number = 20;

    constructor(private elementRef: ElementRef) {}

    @HostListener(':input')
    onInput() {
        if (this.textareaAutoresize) {
            this.resize();
        }
    }

    ngOnInit(): void {
        if (this.elementRef.nativeElement.scrollHeight && this.textareaAutoresize) {
            setTimeout(() => this.resize());
        }
    }

    resize() {
        const el: HTMLTextAreaElement = this.elementRef.nativeElement as HTMLTextAreaElement;
        const minRows: number = el.dataset['minrows'] ? Number(el.dataset['minrows']) : 2;
        const maxRows: number = el.dataset['maxrows'] ? Number(el.dataset['maxrows']) : 1;

        const minHeight: number = this.initialHeight + (this.stepHeight * (minRows - 1));
        const maxHeight: number = this.initialHeight + (this.stepHeight * (maxRows - 1));
        
        if (el.scrollHeight > maxHeight) {
            el.style.overflowY = 'scroll';
            el.style.height = `${maxHeight}px`;
        } 
        else {
            el.style.overflowY = 'hidden';
            el.style.height = '0px';
            el.style.height = `${Math.max(el.scrollHeight, minHeight)}px`;
        }
    }
}

@NgModule({
	imports: [],
	declarations: [TextareaAutoresizeDirective],
	exports: [TextareaAutoresizeDirective],
})
export class TextareaAutoresizeDirectiveModule {}