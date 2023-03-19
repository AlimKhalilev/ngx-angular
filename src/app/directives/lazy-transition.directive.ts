import { AfterViewInit, Directive, ElementRef, NgModule } from "@angular/core";

/** Добавляет свойство transition через некоторое время после отрисовки компонента */
@Directive({ selector: '[lazyTransition]' })
export class LazyTransitionDirective implements AfterViewInit {

    constructor(private el: ElementRef<HTMLDivElement>) {}

    ngAfterViewInit(): void {
        setTimeout(() => this.el.nativeElement.classList.add('lazy-transition'), 200);
    }
}

@NgModule({
	imports: [],
	declarations: [LazyTransitionDirective],
	exports: [LazyTransitionDirective],
})
export class LazyTransitionDirectiveModule {}