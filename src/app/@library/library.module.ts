import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './pipe/cpf.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CpfPipe,
  ],
  providers:[
  ],
  exports:[
    CpfPipe,
  ],
})
export class LibraryModule { }
