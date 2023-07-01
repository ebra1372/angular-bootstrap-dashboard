import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutes } from "./login.routing";
import { LoginComponent } from './login.component';
import { BaseButtonModule } from 'components/base-button/base-button.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoginRoutes,
    BaseButtonModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule { }