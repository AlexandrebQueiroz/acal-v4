import { DataService } from './../../../@data/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { GroupService } from '../group.service';

@Component({
  selector: 'ngx-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.scss'],
})
export class GroupEditComponent implements OnInit {

  public isSubmmited = false;
  public form: FormGroup;
  public init = false;
  public loading = false;

  constructor(
    private toast: NbToastrService,
    private dataService: DataService,
    private fb: FormBuilder,
    private service: GroupService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    const item = this.dataService.item;
    if(!item){
      this.back();
    }
    this.createForm(item);
    this.init = true;
  }

  createForm(item: any) {
    this.form = this.fb.group({
      name: [item.name, Validators.required],
      category: [item.category, [Validators.required]],
      value: [item.value, [Validators.required]],
      createdAt: [item.createdAt, [Validators.required]],
      active:[item.active , [Validators.required]],
      updatedAt: [Date() , [Validators.required]],
    });
  }

  onSubmit(){
    this.isSubmmited = true;

    if(this.form.invalid){
      return;
    }

    this.loading = true;
    this.service.add(this.form.value).then(
      (data)=>{
        this.toast.default(data?.id,'Dado salvo');
        this.loading = false;
        this.back();
      },
      ()=>{
        this.loading = false;
      },
    );
  }

  public back(): void {
    this.router.navigate(['./../list'], {relativeTo: this.activatedRoute});
  }

  public getStatus(field: AbstractControl): string {

    if(!this.isSubmmited){
      return 'basic';
    } else if (field.valid) {
       return 'success';
     }

     return 'danger';

  }

  public name(): AbstractControl {
    return this.form.get('name');
  }

  public category(): AbstractControl {
    return this.form.get('category');
  }

  public value(): AbstractControl {
    return this.form.get('value');
  }
}
