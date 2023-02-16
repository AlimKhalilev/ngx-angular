import { Component, ViewChild } from '@angular/core';
import { NgxTreeViewComponent } from 'src/app/components/ui/tree-view/tree-view.component';
import { IMenuItem } from 'src/app/data/menu/menu-item';
import { MenuDataSource } from './demo-page.data';

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

    radioButtonValue: string = '';
    radioButtonList: string[] = ['blue', 'yellow', 'red'];

    radioButtonNewValue: string = '';
    radioButtonNewList: string[] = ['blue', 'yellow', 'red'];

    contextMenuData = [
        {
            text: 'Заглушка 1',
            icon: 'ngx-search-20',
            bordered: false,
            children: []
        },
        {
            text: 'Заглушка 2',
            icon: 'ngx-search-20',
            bordered: false,
            children: []
        },
        {
            text: 'Заглушка 3',
            icon: 'ngx-search-20',
            bordered: false,
            children: [
                {
                    text: 'Заглушка 1 - 1',
                    icon: 'ngx-search-20',
                    bordered: false,
                },
                {
                    text: 'Заглушка 2 - 1',
                    icon: 'ngx-search-20',
                    bordered: false,
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

    treeViewDataSource: IMenuItem[] = MenuDataSource;
}
