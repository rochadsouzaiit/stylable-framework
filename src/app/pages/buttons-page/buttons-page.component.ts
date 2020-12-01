import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'iit-buttons-page',
  templateUrl: './buttons-page.component.html',
  styleUrls: ['./buttons-page.component.scss']
})
export class ButtonsPageComponent{

  pressed(val: string): void {
    alert(val);
  }
}
