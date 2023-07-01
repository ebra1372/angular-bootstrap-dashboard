import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from 'services/login.service';
import { StorageService } from 'services/storage.service';
import { ToastService } from 'services/toast.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router,
    private storageSerive: StorageService, private toastServie: ToastService) { }
  isLoading: boolean = false;

  ngOnInit() { }

  formGroup = new FormGroup({
    username: new FormControl('mor_2314', [Validators.required]),
    password: new FormControl('83r5^_', [Validators.required])
  });

  get username() { return this.formGroup.get('username') }
  get password() { return this.formGroup.get('password') }

  onSubmit() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.formGroup.disable();

    this.loginService.userLogin(this.formGroup.value)
      .pipe(finalize(() => {
        this.isLoading = false;
        this.formGroup.enable();
      }))
      .subscribe({
        next: (response) => {
          if (response) {
            this.storageSerive.setUserToken(response.token || '');
            this.router.navigate(['/'])
          }
        },
        error: err => {
          this.toastServie.showToast({ text: err.error });
        }
      });
  };
};