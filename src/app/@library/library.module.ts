import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './pipe/cpf/cpf.pipe';
import { AddressPipe } from './pipe/address/address.pipe';
import { ReferencePipe } from './pipe/reference/reference.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CpfPipe,
    AddressPipe,
    ReferencePipe,
  ],
  providers:[
  ],
  exports:[
    CpfPipe,
    AddressPipe,
    ReferencePipe,
  ],
})
export class LibraryModule { }
