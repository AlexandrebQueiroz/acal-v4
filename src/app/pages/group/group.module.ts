import { NgxMaskModule } from 'ngx-mask';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule,
} from '@nebular/theme';
import { GroupAddComponent } from './group-add/group-add.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { GroupService } from './group.service';
import { GroupDeleteComponent } from './group-delete/group-delete.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule,
    ReactiveFormsModule,
    FormsModule,

    NbSpinnerModule,
    NbIconModule,
    NbAccordionModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NgxMaskModule.forChild(),
    NbSelectModule,
    NgxPaginationModule,
  ],
  declarations: [
    GroupComponent,
    GroupAddComponent,
    GroupListComponent,
    GroupDeleteComponent,
    GroupEditComponent,
  ],
  providers:[
    GroupService,
  ],
})
export class GroupModule { }
