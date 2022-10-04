import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  NbAccordionModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule,
  NbListModule } from '@nebular/theme';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { InvoiceService } from './invoice.service';


@NgModule({
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    NbCardModule,
    NbIconModule,
    NbAccordionModule,
    NbInputModule,
    NbCheckboxModule,
    NbListModule,
  ],
  declarations: [
    InvoiceComponent,
  ],
  providers:[
    InvoiceService,
  ],
})
export class InvoiceModule { }
