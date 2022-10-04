import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BillService } from '../bill.service';

@Component({
  selector: 'ngx-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss'],
})
export class BillListComponent implements OnInit {

  item$: Observable<any[]>;

  constructor(
    private service: BillService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ){

  }

  ngOnInit(): void {
    this.item$ = this.service.get();
  }

  detail(){
    this.router.navigate(['./../detail'], {relativeTo: this.activatedRoute});
  }

  add(){
    this.router.navigate(['./../add'], {relativeTo: this.activatedRoute});
  }


}
