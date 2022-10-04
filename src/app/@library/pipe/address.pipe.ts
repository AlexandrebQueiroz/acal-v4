import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../model/address-model';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {

  transform(address: Address): string {
    if(address){
      return `${address.type} ${address.name}, ${address.number} ${address?.letter?.toUpperCase()}`;
    }

    return null;
  }

}
