import { Component } from '@angular/core';
import { INgxTreeView } from 'src/app/components/ui/tree-view/tree-view.component';

@Component({
    selector: 'app-demo-page',
    templateUrl: './demo-page.component.html',
    styleUrls: ['./demo-page.component.scss']
})
export class DemoPageComponent {
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

    treeViewDataSource: INgxTreeView[] = [
		{
			caption: 'Организации, подразделения и сотрудники',
			icon: 'ngx-tree-people-community-20',
			children: [
				{
					caption: 'Подразделения',
					icon: '',
					children: [
						{
							caption: 'Список по организациям',
							icon: 'ngx-tree-people-group-20',
							children: []
						},
						{
							caption: 'Поиск подразделений',
							icon: '',
                            selected: true,
							children: []
						}
					]
				},
				{
					caption: 'Сотрудники',
					icon: '',
					children: [
						{
							caption: 'Алфавитный список',
                            icon: '',
							children: []
						},
						{
							caption: 'Поиск сотрудников',
							icon: '',
							children: []
						}
					]
				}
			]
		},
        {
			caption: 'Помещения и рабочие места',
			icon: 'ngx-tree-building-multiple-20',
			children: []
		},
		{
			caption: 'Технические средства',
			icon: 'ngx-tree-server-multiply-20',
			children: [
				{
					caption: 'Оборудование Оборудование Оборудование',
					icon: '',
					children: [

					]
				},
                {
					caption: 'Оборудование Оборудование Оборудование',
					icon: '',
					children: [

					]
				},
				{
					caption: 'Комплектующие изделия',
					icon: '',
					children: [

					]
				}
			]
		},
        {
			caption: 'ПО и системы',
			icon: 'ngx-tree-window-20',
			children: []
		},
	];
}
