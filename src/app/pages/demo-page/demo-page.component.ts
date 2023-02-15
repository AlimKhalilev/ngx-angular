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
