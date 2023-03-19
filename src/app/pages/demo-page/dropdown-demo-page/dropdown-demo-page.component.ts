import { Component } from '@angular/core';
import { INgxContextMenu } from 'src/app/interfaces/context-menu/context-menu';

@Component({
  selector: 'app-dropdown-demo-page',
  templateUrl: './dropdown-demo-page.component.html',
  styleUrls: ['./dropdown-demo-page.component.scss']
})
export class DropdownDemoPageComponent {
    dropdownClickStatus: boolean = false;
    dropdownRightClickStatus: boolean = false;
    dropdownLongClickStatus: boolean = false;

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
    ];
}
