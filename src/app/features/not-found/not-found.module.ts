import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundRoutes } from "./not-found.routing";
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NotFoundRoutes
  ],
  declarations: [NotFoundComponent],
  exports: [NotFoundComponent],
})
export class NotFoundModule { }