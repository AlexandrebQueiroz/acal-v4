import { LibraryModule } from './../../@library/library.module';
import { NgxMaskModule } from 'ngx-mask';
import { ParameterService } from './parameter.service';
import {
  NbCardModule, NbAccordionModule, NbIconModule, NbButtonModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParameterComponent } from './parameter.component';
import { ParameterListComponent } from './parameter-list/parameter-list.component';
import { ParameterRoutingModule } from './parameter-routing.module';
import { ParameterAddComponent } from './parameter-add/parameter-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ParameterRoutingModule,
    NbCardModule,
    NbAccordionModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule,
    LibraryModule,
  ],
  declarations: [
    ParameterComponent,
    ParameterListComponent,
    ParameterAddComponent,
  ],
  providers:[
    ParameterService,
  ],
})
export class ParameterModule { }
