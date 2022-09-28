import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupService } from '../group.service';

@Component({
  selector: 'ngx-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  item$: Observable<any[]>;

  constructor(
    private service: GroupService,
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
