import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxContextMenuComponent } from './context-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { NgxListItemModule } from '../list-item/list-item.module';
import { ContextMenuDirectiveModule } from 'src/app/directives/context-menu.directive';

@NgModule({
    declarations: [NgxContextMenuComponent],
    imports: [CommonModule, MatMenuModule, NgxListItemModule, ContextMenuDirectiveModule],
    exports: [NgxContextMenuComponent]
})
export class NgxContextMenuModule {}
