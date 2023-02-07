import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
	selector: 'ngx-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ["./checkbox.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxCheckboxComponent implements OnChanges {

	/** Текст чекбокса */
	@Input() text!: string;

	/** Статус чекбокса */
	@Input() checked!: boolean;

	/** Статус неопределенности чекбокса (в группе) (прим. 'Выбрать все') */
	@Input() indeterminate!: boolean;

	/** Статус неактивного чекбокса */
	@Input() disabled: boolean | undefined;

	/** Всплывающая подсказка чекбокса */
	@Input() tooltip: string | undefined;

	/** Событие клика на чекбокс */
	@Output() onChange = new EventEmitter();

	constructor() {}

    ngOnChanges(changes: SimpleChanges): void {
        // при изменении входного параметра indeterminate выключаем актив чекбокса
        if (changes['indeterminate']) {
            this.checked = false;
        }
    }

    changeModel(e: boolean) {
        if (this.indeterminate) {
            this.indeterminate = false;
        }
        this.checked = e;
    }

}

