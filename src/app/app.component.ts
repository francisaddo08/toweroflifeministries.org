import { Component, HostBinding } from '@angular/core';
import {  trigger,
   state,
  style,
  animate,
  transition } from '@angular/animations';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  animations: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TLMorg';
  collapsed = true;
}
