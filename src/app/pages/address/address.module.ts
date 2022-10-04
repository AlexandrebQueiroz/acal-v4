import { AddressRoutingModule } from './address-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './address.component';
import { AddressAddComponent } from './address-add/address-add.component';
import { AddressDeleteComponent } from './address-delete/address-delete.component';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressEditComponent } from './address-edit/address-edit.component';

@NgModule({
  imports: [
    CommonModule,
    AddressRoutingModule,
  ],
  declarations: [
    AddressComponent,
    AddressAddComponent,
    AddressDeleteComponent,
    AddressListComponent,
    AddressEditComponent,
  ],
})
export class AddressModule { }
