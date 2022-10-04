import { BillRoutingModule } from './bill-routing.module';
import { NbCardModule, NbIconModule, NbInputModule, NbAccordionModule, NbButtonModule } from '@nebular/theme';
import { BillService } from './bill.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './bill.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillDeleteComponent } from './bill-delete/bill-delete.component';
import { RouterModule } from '@angular/router';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { BillDetailHeaderComponent } from './bill-detail/bill-detail-header/bill-detail-header.component';
import { BillDetailFinancialComponent } from './bill-detail/bill-detail-financial/bill-detail-financial.component';
import { BillDetailParametersComponent } from './bill-detail/bill-detail-parameters/bill-detail-parameters.component';



@NgModule({
  imports: [
    CommonModule,
    NbAccordionModule,
    RouterModule,
    BillRoutingModule,

    NbButtonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
  ],
  declarations: [
    BillComponent,
    BillListComponent,
    BillDeleteComponent,
    BillDetailComponent,
    BillDetailHeaderComponent,
    BillDetailFinancialComponent,
    BillDetailParametersComponent,
  ],
  providers:[
    BillService,
  ],
})
export class BillModule { }
