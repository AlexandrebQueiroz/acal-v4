import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ParameterService } from '../parameter.service';

@Component({
  selector: 'ngx-parameter-add',
  templateUrl: './parameter-add.component.html',
  styleUrls: ['./parameter-add.component.scss'],
})
export class ParameterAddComponent implements OnInit {

  public isSubmmited = false;
  public form: FormGroup;
  public loading = false;

  constructor(
    private toast: NbToastrService,
    private fb: FormBuilder,
    private service: ParameterService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      reference: ['', Validators.required],
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

  public reference(): AbstractControl {
    return this.form.get('reference');
  }

}
