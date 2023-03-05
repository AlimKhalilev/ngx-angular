import { INgxListItem } from "../list-item/list-item";

/** Интерфейс входных данных компонента контекстного меню */
export interface INgxContextMenu extends INgxListItem {
    borderBottom?: boolean;
    onClick?: () => void;
    children?: INgxContextMenu[];
    data?: any
}