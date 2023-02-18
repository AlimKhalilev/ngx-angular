import { Component, Input, OnInit } from '@angular/core';

/** Интерфейс входных данных компонента пункта списка */
export interface INgxListItem {
    text: string;
    shortcut?: string;
    icon?: string;
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

    /** Флаг пункта списка с стрелкой (шевроном) */
    @Input() chevron: boolean = false;

    /** Статус неактивного пункта списка */
    @Input() disabled: boolean = false;

    /** Всплывающая подсказка пункта списка */
    @Input() tooltip: string = '';

    ngOnInit(): void {
        /** Опциональная инициализация через params interface */

        this.text = this.params?.text ?? this.text;
        this.shortcut = this.params?.shortcut ?? this.shortcut;
        this.icon = this.params?.icon ?? this.icon;
        this.chevron = this.params?.chevron ?? this.chevron;
        this.disabled = this.params?.disabled ?? this.disabled;
        this.tooltip = this.params?.tooltip ?? this.tooltip;
    }
}