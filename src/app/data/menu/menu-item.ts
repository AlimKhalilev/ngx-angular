import { INgxContextMenu } from "src/app/components/ui/context-menu/context-menu.component";

/**
 * Пункт меню.
 */
export interface IMenuItem {
	/** Идентификатор пункта меню. */
	id: string;

	/** Идентификатор меню. */
	menuId?: string | null;

	/** Тип пункта меню. */
	type: MenuItemType;

	/** Идентификатор родительского пункта меню. */
	parentId?: string | null;

	/** Подпись. */
	caption: string;

	/** Описание. */
	description?: string | null;

	/** Новая группа. */
	newGroup?: boolean | null;

	/** Всплывающая подсказка. */
	toolTip?: string | null;

	/** Доступность пункта меню. */
	enable?: boolean | null;

	/** Видимость пункта меню. */
	visible?: boolean | null;

	/** Видимость пункта меню. */
	visibleCondition?: string | null;

	/** Данные картинки пункта меню. */
	pictureData?: string | null;

	/** Ключ картинки (для иконок DevExpress). */
	pictureKey?: string | null;

	/** Идентификатор фрейма. */
	frameId?: string | null;

	/** Тип фрейма. */
	frameType: number;

	/** Тип фрейма KB (глобальный справочник). */
	kbFrameType: number;

	/** Идентификатор команды. */
	commandId?: string | null;

	/** Признак выполнения команды с несколькими выделенными строками. */
	multiRun: boolean;

	/** Признак раскрытия пункта меню. */
	expanded: boolean;

	/** Порядковый номер. */
	positionOrder: number;

	/** Идентификатор меню для позиционирования. */
	selectMenuItemId?: string | null;

	/** Отображение на панели инструментов. */
	toolBarPosition: ToolBarPosition;

	/** Вид отображения на панели инструментов. */
	toolBarStyle: ToolBarStyle;

	/** Дочерние пункты меню. */
	items: IMenuItem[];

	/** Признак того, что меню выбрано. */
	selected?: boolean | null;

    /** Доп параметры не прописанные в меню */
	code?: string | null;
	enableCondition?: string | null;
    pictureId?: string | null;
    permissions?: string | null;
    posId?: number
    parent?: IMenuItem
    contextMenuData?: INgxContextMenu[]
}

/**
 * Тип пункта меню.
 */
export const enum MenuItemType {
	/** Пункт меню-иерархии. */
	TreeView = 0,

	/** Пункт меню-списка. */
	ItemList = 1,

	/** Гиперссылка. */
	Link = 2,

	/** Описание. */
	Description = 3,
}

/**
 * Отображение на панели инструментов.
 */
export const enum ToolBarPosition {
	/** Команды. */
	Commands = 0,

	/** Команды и панель инструментов. */
	CommandsAndToolBar = 1,

	/** Панель инструментов. */
	ToolBar = 2,

	/** Не отображать на панели инструментов. */
	Hidden = 3,
}

/** Вид отображения на панели инструментов. */
export const enum ToolBarStyle {
	/** Иконка. */
	Icon = 0,

	/** Иконка и текст. */
	IconAndText = 1,
}
