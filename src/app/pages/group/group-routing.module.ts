import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupAddComponent } from './group-add/group-add.component';
import { GroupDeleteComponent } from './group-delete/group-delete.component';
import { GroupEditComponent } from './group-edit/group-edit.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupComponent } from './group.component';

export const routes: Routes = [
  {
    path: '',
    component: GroupComponent,
    children: [
      {
        path: 'add',
        component: GroupAddComponent,
      },
      {
        path: 'edit',
        component: GroupEditComponent,
      },
      {
        path: 'list',
        component: GroupListComponent,
      },
      {
        path: 'delete',
        component: GroupDeleteComponent,
      },
      {
        path: '',
        redirectTo: 'list',
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupRoutingModule {
}
