import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxContextMenuComponent } from './context-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { NgxListItemModule } from '../list-item/list-item.module';
import { NgxDirectivesModule } from 'src/app/directives/directives.module';

@NgModule({
    declarations: [NgxContextMenuComponent],
    imports: [CommonModule, MatMenuModule, NgxListItemModule, NgxDirectivesModule],
    exports: [NgxContextMenuComponent]
})
export class NgxContextMenuModule {}
