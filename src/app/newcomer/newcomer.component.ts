import { Component, OnInit, createPlatformFactory } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { from } from 'rxjs';
import { ServerService } from '../server.service';
import { Newcomer } from '../models/newcomer';

@Component({
  selector: 'app-newcomer',
  templateUrl: './newcomer.component.html',
  styleUrls: ['./newcomer.component.css']
})
export class NewcomerComponent implements OnInit {

  newcomerForm: FormGroup;
  newcomer = new Newcomer();

  constructor( private service: ServerService) { }

  ngOnInit() {
    this.newcomerForm = new FormGroup({
      firstName : new FormControl('', [Validators.required]),
      lastName: new FormControl(''),
      number: new FormControl(''),
      email: new FormControl('', [ Validators.required, Validators.email]),
      confirmEmail: new FormControl('', [ Validators.required, Validators.email]),
      message: new FormControl(''),
      byphone: new FormControl(''),
      byemail: new FormControl('')
    });
   }
mapNewcomerFormToNewcomer() {
this.newcomer.firstName = this.newcomerForm.value.firstName;
this.newcomer.lastName = this.newcomerForm.value.lastName;
this.newcomer.number = this.newcomerForm.value.number;
this.newcomer.email = this.newcomerForm.value.confirmEmail;
this.newcomer.message = this.newcomerForm.value.message;
this.newcomer.byemail = this.newcomerForm.value.byemail;
this.newcomer.byphone = this.newcomerForm.value.byphone;

}
addNewcomer(){
  this.mapNewcomerFormToNewcomer();
  this.service.addNewcomer(this.newcomer).subscribe(
    data => {
      this.newcomerForm.reset();
    }
  );
}

}
