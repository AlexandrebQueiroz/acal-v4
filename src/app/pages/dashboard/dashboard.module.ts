import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ThemeModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
