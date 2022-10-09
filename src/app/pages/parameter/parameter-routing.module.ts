import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParameterAddComponent } from './parameter-add/parameter-add.component';
import { ParameterListComponent } from './parameter-list/parameter-list.component';
import { ParameterComponent } from './parameter.component';

export const routes: Routes = [
  {
    path: '',
    component: ParameterComponent,
    children: [
      {
        path: 'list',
        component: ParameterListComponent,
      },
      {
        path: 'add',
        component: ParameterAddComponent,
      },
      {
        path: '',
        redirectTo: 'list',
      },
    ],
  },
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParameterRoutingModule {
}
