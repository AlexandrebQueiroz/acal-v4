import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { GroupService } from '../group.service';

@Component({
  selector: 'ngx-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.scss']
})
export class GroupAddComponent implements OnInit {

  public isSubmmited = false;
  public form: FormGroup;
  public loading = false;

  constructor(
    private toast: NbToastrService,
    private fb: FormBuilder,
    private service: GroupService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      category: ['', [Validators.required]],
      value: ['', [Validators.required]],
      createdAt: [Date()],
      updatedAt: [Date()],
      active:[true],
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
        this.router.navigate(['./../list'], {relativeTo: this.activatedRoute});
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
