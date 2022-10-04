import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../@data/data.service';
import { GroupService } from '../group/group.service';
import { InvoiceService } from './invoice.service';

@Component({
  selector: 'ngx-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {

  item$: Observable<any[]>;

  constructor(
    private service: InvoiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    ){
  }

  ngOnInit(): void {
    this.item$ = this.service.get();
  }

}
