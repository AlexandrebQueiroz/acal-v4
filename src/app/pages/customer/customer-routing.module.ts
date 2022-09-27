import { CustomerListComponent } from './customer-list/customer-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

export const routes: Routes = [
  {
    path: '',
    component: CustomerComponent, children: [
      {
        path: 'add',
        component: CustomerAddComponent,
      },
      {
        path: 'list',
        component: CustomerListComponent,
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
export class CustomerRoutingModule {
}
