import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

@Pipe({
  name: 'reference',
})
export class ReferencePipe implements PipeTransform {

  transform(value: string): string {
    if(!value){
      return '';
    }

    const month = Number(value
      ?.padStart(6, '0')
      .replace(/[^0-9]/, '')
      .substring(0, 2));

      const year = Number(value
        ?.padStart(6, '0')
        .replace(/[^0-9]/, '')
        .substring(2, 6));

    const date = new Date(
      new Date().getFullYear(),
      new Date().getDay(),
      month);

    const formated = format(date, 'MMMM', {locale: ptBR} );

    return `${formated +'/'+ year}`;
  }

}
