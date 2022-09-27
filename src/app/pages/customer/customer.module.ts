import { NbCardModule, NbButtonModule, NbInputModule, NbFormFieldModule, NbIconModule } from '@nebular/theme';
import { CustomerService } from './customer.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { LibraryModule } from '../../@library/library.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NbCardModule,
    NbButtonModule,
    LibraryModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NgxMaskModule.forChild(),
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
