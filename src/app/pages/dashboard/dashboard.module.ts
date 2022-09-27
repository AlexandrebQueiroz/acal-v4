import { DashboardService } from './dashboard.service';
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
  providers:[
    DashboardService,
  ],
})
export class DashboardModule { }
