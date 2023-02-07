import { Component } from '@angular/core';

export interface ITreeView {
    caption: string,
    icon: string,
    isExpanded: boolean,
    children?: ITreeView,
    onClick?: () => void
}

@Component({
    selector: 'app-tree-view',
    templateUrl: './tree-view.component.html',
    styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {

}
