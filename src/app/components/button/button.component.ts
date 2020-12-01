import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'iit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent  {

  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  @Input() defaultValue: any = null;
  @Output() pressed = new EventEmitter<any>();

  constructor() { }

  buttonPressed(): void {
    this.pressed.emit(this.defaultValue);
  }

}
