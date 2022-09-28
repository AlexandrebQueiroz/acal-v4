import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbSpinnerModule,
  } from '@nebular/theme';
import { NgxMaskModule } from 'ngx-mask';
import { LibraryModule } from '../../@library/library.module';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    LibraryModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),

    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbAccordionModule,
    NbSpinnerModule,
  ],
  declarations: [
    CustomerComponent,
    CustomerListComponent,
    CustomerAddComponent,
  ],
  providers:[
    CustomerService,
  ],
})
export class CustomerModule { }
