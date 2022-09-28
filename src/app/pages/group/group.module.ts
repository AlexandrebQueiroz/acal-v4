import { NbIconModule, NbAccordionModule, NbCardModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { GroupRoutingModule } from './group-routing.module';
import { GroupService } from './group.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { GroupAddComponent } from './group-add/group-add.component';
import { GroupListComponent } from './group-list/group-list.component';

@NgModule({
  imports: [
    CommonModule,
    GroupRoutingModule,

    NbIconModule,
    NbAccordionModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
  ],
  declarations: [
    GroupComponent,
    GroupAddComponent,
    GroupListComponent,
  ],
  providers:[
    GroupService,
  ],
})
export class GroupModule { }
