import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent implements OnInit {

  public showPerson = true;

  constructor() { }

  ngOnInit(): void {
  }

  tooglePersonType(){
    this.showPerson = !this.showPerson;
  }

}
