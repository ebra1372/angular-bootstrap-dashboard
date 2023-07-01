import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutes } from "./dashboard.routing";
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
