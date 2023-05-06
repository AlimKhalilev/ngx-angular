import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'ngx-button',
	templateUrl: './button.component.html',
	styleUrls: ["./button.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxButtonComponent implements OnInit {
    /** Биндим свойство display для host элемента (если expand -> block) */
    @HostBinding('style.display')
    get styleDisplay(): string {
        return this.expand ? 'block' : 'inline-block';
    }

	/** Тип кнопки (по дефолту text) */
	@Input() type: 'text' | 'text-color' | 'secondary' | 'primary' | 'danger' | 'small' | 'small-close' | 'tile' | 'tile-close' = 'text';

	/** Иконка кнопки (список из matIcon или кастомные через matIconRegistry) */
	@Input() icon: string = '';

    /** Цвет иконки кнопки (передается название цветов из _theme.scss) */
	@Input() iconColor: string = '';

	/** Флаг перевернутой иконки */
	@Input() iconReverse: boolean = false;

	/** Статус неактивной кнопки */
	@Input() disabled: boolean = false;

	/** Опциональная ширина кнопки */
	@Input() width!: number;

    /** Флаг кнопки с стрелкой (шевроном) */
	@Input() chevron: boolean = false;

    /** Флаг перевернутой стрелки (шеврона) */
	@Input() chevronReverse: boolean = false;

    /** Флаг блочной кнопки (ширина растягивается на весь блок) */
	@Input() expand: boolean = false;

	/** Всплывающая подсказка кнопки */
	@Input() tooltip: string = '';

	/** Событие клика на кнопку */
	@Output() onClick = new EventEmitter();

	/** Список классов для элемента кнопки */
	hostClassName: string[] = ["ngx-button"];

	constructor() {}

	ngOnInit(): void {
		this.hostClassName.push("ngx-button--" + this.type);
	}
}

