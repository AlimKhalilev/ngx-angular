import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/** Интерфейс входных данных компонента пункта списка */
export interface INgxListItem {
    text: string;
    shortcut?: string;
    icon?: string;
    picture?: string;
    chevron?: boolean;
    disabled?: boolean;
    tooltip?: string;
}

@Component({
    selector: 'ngx-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class NgxListItemComponent implements OnInit {

    /** Текст пункта списка */
    @Input() params!: INgxListItem;

    /** Текст пункта списка */
    @Input() text: string = '';

    /** Краткое описание пункта списка */
    @Input() shortcut: string = '';

    /** Иконка пункта списка (список из matIcon или кастомные через matIconRegistry) */
    @Input() icon: string = '';

    /** Картинка пункта списка (src) */
    @Input() picture: string = '';

    /** Флаг пункта списка с стрелкой (шевроном) */
    @Input() chevron: boolean = false;

    /** Статус неактивного пункта списка */
    @Input() disabled: boolean = false;

    /** Всплывающая подсказка пункта списка */
    @Input() tooltip: string = '';

    /** Событие клика на пункт списка */
	@Output() onClick = new EventEmitter();

    ngOnInit(): void {
        /** Опциональная инициализация через params interface */

        this.text = this.params?.text ?? this.text;
        this.shortcut = this.params?.shortcut ?? this.shortcut;
        this.icon = this.params?.icon ?? this.icon;
        this.picture = this.params?.picture ?? this.picture;
        this.chevron = this.params?.chevron ?? this.chevron;
        this.disabled = this.params?.disabled ?? this.disabled;
        this.tooltip = this.params?.tooltip ?? this.tooltip;
    }

    /** Метод получения ресурса для картинка (ссылка или base64) */
    public getPictureSrc(path: string): string {
        let src = '';
        if (path) {
            try {
                window.atob(path);
                src = `data:image/jpg;base64,${path}`;
            } catch(e) {
                src = path;
            }
        }
        return src;
    }
}
