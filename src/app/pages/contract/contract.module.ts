import { LibraryModule } from './../../@library/library.module';
import { NbIconModule, NbCardModule, NbAccordionModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { ContractService } from './contract.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractComponent } from '../contract/contract.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractRoutingModule } from './contract-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ContractRoutingModule,
    NbIconModule,
    NbCardModule,
    NbAccordionModule,
    NbButtonModule,
    NbInputModule,
    LibraryModule,
  ],

  declarations: [
    ContractComponent,
    ContractListComponent,
  ],
  providers:[
    ContractService,
  ],
})
export class ContractModule { }
