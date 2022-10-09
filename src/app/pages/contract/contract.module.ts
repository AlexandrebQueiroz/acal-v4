import { LibraryModule } from './../../@library/library.module';
import { NbIconModule, NbCardModule, NbAccordionModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { ContractService } from './contract.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractComponent } from '../contract/contract.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractRoutingModule } from './contract-routing.module';
import { ContractAddComponent } from './contract-add/contract-add.component';


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
    ContractAddComponent,
  ],
  providers:[
    ContractService,
  ],
})
export class ContractModule { }
