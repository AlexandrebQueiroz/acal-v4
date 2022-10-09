import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module')
        .then(m => m.DashboardModule),
    },
    {
      path: 'customer',
      loadChildren: () => import('./customer/customer.module')
        .then(m => m.CustomerModule),
    },
    {
      path: 'group',
      loadChildren: () => import('./group/group.module')
        .then(m => m.GroupModule),
    },
    {
      path: 'address',
      loadChildren: () => import('./address/address.module')
        .then(m => m.AddressModule),
    },
    {
      path: 'contract',
      loadChildren: () => import('./contract/contract.module')
        .then(m => m.ContractModule),
    },
    {
      path: 'invoice',
      loadChildren: () => import('./invoice/invoice.module')
        .then(m => m.InvoiceModule),
    },
    {
      path: 'bill',
      loadChildren: () => import('./bill/bill.module')
        .then(m => m.BillModule),
    },
    {
      path: 'parameter',
      loadChildren: () => import('./parameter/parameter.module')
        .then(m => m.ParameterModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
