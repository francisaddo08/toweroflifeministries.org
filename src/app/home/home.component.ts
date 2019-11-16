import { Component, OnInit, HostBinding, Optional } from '@angular/core';
import { trigger, state, style, animate, keyframes, query, transition, stagger } from '@angular/animations';
import { from } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],



})
export class HomeComponent implements OnInit {
 state: string;

  constructor() { }

  ngOnInit() {

  }

}
