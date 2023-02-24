import { Component, ViewChild } from '@angular/core';
import { INgxContextMenu } from 'src/app/components/ui/context-menu/context-menu.component';
import { NgxTreeViewComponent } from 'src/app/components/ui/tree-view/tree-view.component';
import { IMenuItem } from 'src/app/data/menu/menu-item';
import { MenuDataSource, MenuDataSource2, MenuDataSourceTile } from './demo-page.data';

@Component({
    selector: 'app-demo-page',
    templateUrl: './demo-page.component.html',
    styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent {
    @ViewChild("treeViewRef") treeViewRef!: NgxTreeViewComponent; 
    
    textBoxValue: string = 'Тест';

    checkBoxDisabled: boolean = true;
    checkBoxValue: boolean = false;
    isIndeterminate: boolean = true;

    toggleDisabled: boolean = true;
    toggleValue: boolean = false;

    isTagShown: boolean = true;

    dropdownClickStatus: boolean = false;
    dropdownRightClickStatus: boolean = false;
    dropdownLongClickStatus: boolean = false;

    radioButtonValue: string = '';
    radioButtonList: string[] = ['blue', 'yellow', 'red'];

    radioButtonNewValue: string = '';
    radioButtonNewList: string[] = ['blue', 'yellow', 'red'];

    treeViewDataSource: IMenuItem[] = MenuDataSource;
    treeViewDataSource2: IMenuItem[] = MenuDataSource2;
    treeViewDataSourceTile: IMenuItem[] = MenuDataSourceTile;

    contextMenuData: INgxContextMenu[] = [
        {
            text: 'Заглушка 1',
            icon: 'ngx-notepad-edit-20',
            borderBottom: true,
            children: []
        },
        {
            text: 'Заглушка 2',
            shortcut: 'Shift+F11',
            children: []
        },
        {
            text: 'Заглушка 3',
            icon: 'ngx-table-settings-20',
            shortcut: 'Shift+F11',
            children: []
        },
        {
            text: 'Заглушка 4',
            icon: 'ngx-search-20',
            children: [
                {
                    text: 'Заглушка 4 - 1',
                    icon: 'ngx-copy-20',
                },
                {
                    text: 'Заглушка 4 - 2',
                    icon: 'ngx-add-circle-20',
                },
            ]
        }
    ]

    buttonClicked() {
        console.log('Кликнули на кнопку');
    }

    textBoxBtnClick() {
        console.log('кликнули в текстинпуте');
    }

    toggleTreeView() {
        this.treeViewRef.toggleAllItems();
    }

    treeViewSelectItem(item: IMenuItem) {
        console.log(item);
    }
}
