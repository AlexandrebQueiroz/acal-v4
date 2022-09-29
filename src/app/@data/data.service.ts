import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private _item: any;

  constructor() { }

  get item(): any {
    return this._item;
  }

  set item(item: any) {
     this._item = item;
  }

}
