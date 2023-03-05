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