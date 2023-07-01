import { Injectable } from '@angular/core';
import Sweetalert from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class ToastService {
  constructor() { }

  public showToast({ text = '' }) {
    return (
      Sweetalert.fire({
        text: text,
        toast: true,
        timerProgressBar: true,
        timer: 4000,
        position: "bottom-left",
        icon: "info",
        showConfirmButton: false,
        showCloseButton: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Sweetalert.stopTimer);
          toast.addEventListener("mouseleave", Sweetalert.resumeTimer);
        },
      })
    )
  }
};