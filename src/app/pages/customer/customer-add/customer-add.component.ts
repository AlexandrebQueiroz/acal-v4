import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'ngx-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent implements OnInit {

  public showPerson = true;
  public isSubmmited = false;
  public form: FormGroup;
  public loading = false;

  constructor(
    private toast: NbToastrService,
    private fb: FormBuilder,
    private service: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  tooglePersonType(){
    this.showPerson = !this.showPerson;
    this.document().setValue(null);
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      document: ['', [Validators.required]],
      createdAt: [Date()],
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

  public document(): AbstractControl {
    return this.form.get('document');
  }
}
