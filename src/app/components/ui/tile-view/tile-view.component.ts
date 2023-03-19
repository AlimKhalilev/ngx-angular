import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INgxContextMenu } from 'src/app/interfaces/context-menu/context-menu';
import { IMenuItem } from 'src/app/interfaces/menu/menu-item';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
    selector: 'ngx-tile-view',
    templateUrl: './tile-view.component.html',
    styleUrls: ['./tile-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxTileViewComponent implements OnInit, AfterViewInit {
    
    /** Ресурс данных для компонента tileView */
    @Input() dataSource!: IMenuItem[];

    /** Событие выбора элемента из списка */
    @Output() onSelect = new EventEmitter<IMenuItem>();

    /** Список датасурса в один уровень */
    inlineDataSource: IMenuItem[] = [];

    /** Ссылка на объект, который в данный момент выделен */
    selectedItem!: IMenuItem;

    /** Уникальный идентификатор объекта списка */
    uniqueId: number = 0;

    constructor(private cd: ChangeDetectorRef, public utilsService: UtilsService) {}

    ngOnInit(): void {
        this.basicListInit(this.dataSource);
    }

    ngAfterViewInit(): void {
        /** 
            Для избежания Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError, 
            чтобы tooltip отображался у всех компонентов при наведении
        */

        setTimeout(() => this.cd.markForCheck(), 100);
    }

    /** Изначальный проход по дереву (установление selected и прочее) */
    private basicListInit(list: IMenuItem[]): void {
        list.forEach((item) => {
            item.expanded = item.expanded ? true : false;

            if (item.selected) {
                this.selectedItem = item;
            }

            this.inlineDataSource.push(item);

            if (item.items && item.items.length) {
                this.basicListInit(item.items);
                item.contextMenuData = this.createContextMenuData(item);
            }
        });
    }

    /** Генерация вложенного списка для передачи в контекстное меню */
    private createContextMenuData(item: IMenuItem): INgxContextMenu[] {
        return item.items.map((e: IMenuItem) => {
            return {
                text: e.caption,
                data: e,
                children: e.items && e.items.length ? this.createContextMenuData(e) : []
            };
        });
    }

    /** Событие клика на элемент (выбор элемента) */
    public onSelectItem(item: IMenuItem) {
        if (this.selectedItem) {
            this.selectedItem.selected = false;
        }
        this.selectedItem = item;
        this.selectedItem.selected = true;
        this.onSelect.emit(this.selectedItem);
    }

    /** Событие клика на dropdown (раскрытие меню) */
    public onExpandItem(item: IMenuItem, state: boolean) {
        item.expanded = state;
    }
}
