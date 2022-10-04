import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressAddComponent } from './address-add/address-add.component';
import { AddressDeleteComponent } from './address-delete/address-delete.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressComponent } from './address.component';

export const routes: Routes = [
  {
    path: '',
    component: AddressComponent,
    children: [
      {
        path: 'add',
        component: AddressAddComponent,
      },
      {
        path: 'edit',
        component: AddressEditComponent,
      },
      {
        path: 'list',
        component: AddressListComponent,
      },
      {
        path: 'delete',
        component: AddressDeleteComponent,
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
export class AddressRoutingModule {
}
