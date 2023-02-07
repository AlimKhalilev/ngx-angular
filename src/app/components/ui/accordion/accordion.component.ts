import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterViewInit {

    /** Базовая опорная высота (для расчета пропорции анимации) */
    @Input() baseHeight: number = 300;

    /** Базовая опорная задержка (для расчета пропорции анимации) */
    @Input() baseDelay: number = 0.5;

    /** Флаг показа контента аккордеона */
    @Input() openState: boolean = false;

    /** Заголовок аккордеона */
    @Input() name: string = '';

    /** Ссылка на узел DOM элемента контейнера контента аккордеона */
    @ViewChild("accordionBody") accordionBody!: ElementRef<HTMLDivElement>;

    /** Ссылка на узел DOM элемента хост элемента аккордеона */
    @ViewChild("accordion") accordion!: ElementRef<HTMLDivElement>;

    /** Скрыть / раскрыть аккордеон */
    changeAccordionState() {
        this.openState = !this.openState;
    }

    onAnimStart(e: any) {
        console.log(e);
    }

    ngAfterViewInit(): void {
        let node = this.accordionBody.nativeElement;
        let host = this.accordion.nativeElement;
        let delay = Math.min(Math.max(((this.baseDelay * node.offsetHeight) / this.baseHeight), 0.4), 2); // не быстрее 0.4сек и не медленнее 2 сек

        host.setAttribute("style", `--height: ${node.offsetHeight}px; --transition: ${delay}s ease-in-out;`);
        host.classList.add("accordion--init");
    }
}
