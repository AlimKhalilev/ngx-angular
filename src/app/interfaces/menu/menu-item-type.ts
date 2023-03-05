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