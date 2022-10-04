import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './pipe/cpf.pipe';
import { AddressPipe } from './pipe/address.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CpfPipe,
    AddressPipe,
  ],
  providers:[
  ],
  exports:[
    CpfPipe,
    AddressPipe,
  ],
})
export class LibraryModule { }
