import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'services/storage.service';
import { ConfirmService } from 'services/confirm.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  constructor(private router: Router, private storageSerive: StorageService, private confirmService: ConfirmService) { }

  ngOnInit() {
  }

  onExit() {
    this.confirmService.showConfirm({
      title: "خروج",
      text: "آیا از خارج شدن اطمینان دارید ؟",
      onOk: () => {
        this.storageSerive.deleteUserToken();
        this.router.navigate(['/login'])
      }
    })
  }
}