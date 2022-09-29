import { DataService } from './../../../@data/data.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { filter } from 'rxjs/operators';
import { GroupService } from '../group.service';

@Component({
  selector: 'ngx-group-delete',
  templateUrl: './group-delete.component.html',
})
export class GroupDeleteComponent implements OnInit {

  item: any;

  constructor(
    private toast: NbToastrService,
    private fb: FormBuilder,
    private service: GroupService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    ){
  }

  ngOnInit(): void {
    this.item = this.dataService.item;
  }

  public delete(){
    this.service.delete(this.item).then(
      ()=>{
        this.toast.default(this.item?.id,'Dado Excluido');
        this.router.navigate(['./../list'], {relativeTo: this.activatedRoute});
      },
    );
  }

  public back(): void {
    this.router.navigate(['./list'], {relativeTo: this.activatedRoute});
  }

}
