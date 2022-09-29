import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { GroupService } from '../group.service';
import { DataService } from './../../../@data/data.service';

@Component({
  selector: 'ngx-group-delete',
  templateUrl: './group-delete.component.html',
})
export class GroupDeleteComponent implements OnInit {

  item: any;

  constructor(
    private toast: NbToastrService,
    private service: GroupService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    ){
  }

  ngOnInit(): void {
    this.item = this.dataService.item;
    if(!this.item){
      this.back();
    }
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
