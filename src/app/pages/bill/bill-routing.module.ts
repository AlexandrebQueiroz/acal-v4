import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillDeleteComponent } from './bill-delete/bill-delete.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillComponent } from './bill.component';

export const routes: Routes = [
  {
    path: '',
    component: BillComponent, children: [
      {
        path: 'delete',
        component: BillDeleteComponent,
      },
      {
        path: 'detail',
        component: BillDetailComponent,
      },
      {
        path: 'list',
        component: BillListComponent,
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
export class BillRoutingModule {
}
