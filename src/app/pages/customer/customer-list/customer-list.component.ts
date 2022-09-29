import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'ngx-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
})
export class CustomerListComponent implements OnInit {

  item$: Observable<any[]>;

  constructor(
    private service: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ){

  }

  ngOnInit(): void {
    this.item$ = this.service.get();
  }

  add(){
    this.router.navigate(['./../add'], {relativeTo: this.activatedRoute});
  }

}
