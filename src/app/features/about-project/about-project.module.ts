import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutProjectRoutes } from "./about-project.routing";
import { AboutProjectComponent } from './about-project.component';

@NgModule({
  imports: [
    CommonModule,
    AboutProjectRoutes
  ],
  declarations: [AboutProjectComponent],
})
export class AboutProjectModule { }