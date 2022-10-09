import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../../../@data/data.service';
import { ParameterService } from '../parameter.service';

@Component({
  selector: 'ngx-parameter-list',
  templateUrl: './parameter-list.component.html',
  styleUrls: ['./parameter-list.component.scss'],
})
export class ParameterListComponent implements OnInit {

  item$: Observable<any[]>;

  constructor(
    private service: ParameterService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.item$ = this.service.get();
  }

  add() {
    this.router.navigate(['./../add'], {relativeTo: this.activatedRoute});
  }

  edit(item: any){
    this.dataService.item = item;
    this.router.navigate(['./../edit'], { relativeTo: this.activatedRoute});
  }

  delete(item: any) {
    this.dataService.item = item;
    this.router.navigate(['./../delete'], { relativeTo: this.activatedRoute});
  }
}
