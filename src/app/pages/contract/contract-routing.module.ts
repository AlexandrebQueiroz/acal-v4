import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractAddComponent } from './contract-add/contract-add.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractComponent } from './contract.component';

export const routes: Routes = [
  {
    path: '',
    component: ContractComponent, children: [
      {
        path: 'add',
        component: ContractAddComponent,
      },
      {
        path: 'list',
        component: ContractListComponent,
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
export class ContractRoutingModule {
}
