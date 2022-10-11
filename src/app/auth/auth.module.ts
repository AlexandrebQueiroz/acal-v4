import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule } from '@nebular/theme';
import { environment } from '../../environments/environment';
import { NB_AUTH_MODULE_FIRE } from '../@core/core.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';

const NB_MODULE = [
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
];

const ANGULAR_MODULE = [
  CommonModule,
  FormsModule,
  RouterModule,
  HttpClientModule,
];

@NgModule({
  imports: [
    AuthRoutingModule,
    ...NB_AUTH_MODULE_FIRE,
    ...ANGULAR_MODULE,
    ...NB_MODULE,
  ],

  declarations: [
    LoginComponent,
  ],

  providers: [
  ],
})
export class AuthModule { }
