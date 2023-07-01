import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss']
})
export class BaseButtonComponent implements OnInit {
  @Input() label = "";
  @Input() isLoading = false;
  @Input() beforLabelIcon = "";
  @Input() isDisabled = false;
  @Input() type = "submit";
  @Input() class = "btn-primary";
  @Input() onClick: Function = () => { };

  constructor() { }

  ngOnInit() {
  }

}