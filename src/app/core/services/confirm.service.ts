import { Injectable } from '@angular/core';
import Sweetalert from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class ConfirmService {
  constructor() { }

  public showConfirm({ text = '', confirmButtonText = 'تایید',
    cancelButtonText = 'لغو', onOk = () => { }, title = "", onCancel = () => { }
  }) {
    return (
      Sweetalert.fire({
        text: text,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: confirmButtonText,
        cancelButtonText: cancelButtonText,
        title: title,
      }).then((response) => {
        if (response.isConfirmed) {
          if (onOk) onOk();
        }
        else if (response.dismiss === Sweetalert.DismissReason.cancel) {
          if (onCancel) onCancel();
        }
      })
    )
  }
};