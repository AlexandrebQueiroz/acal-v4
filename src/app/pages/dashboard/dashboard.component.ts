import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {

  item$: Observable<any[]>;

  constructor(private service: DashboardService) {
    this.item$ = this.service.get();
    this.add();
  }

  add(){
    this.service.add({nome: 'teste', cpf: '03396885562'});
  }

}
