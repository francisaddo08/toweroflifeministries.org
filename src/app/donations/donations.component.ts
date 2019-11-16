import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Donations } from '../models/donations';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
 donationsForm: FormGroup;
 donations = new Donations();
  constructor( private service: ServerService) { }

  ngOnInit() {

    this.donationsForm = new FormGroup({
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

mapFormDataToModel() {
  this.donations.firstName = this.donationsForm.value.firstName;
  this.donations.lastName = this.donationsForm.value.lastName;
  this.donations.number = this.donationsForm.value.number;
  this.donations.email = this.donationsForm.value.email;
  this.donations.confirmEmail = this.donationsForm.value.confirmEmail;
  this.donations.message = this.donationsForm.value.message;
  this.donations.byemail = this.donationsForm.value.byemail;
  this.donations.byphone = this.donationsForm.value.byphone;
}
addDonation() {
  this.mapFormDataToModel();
  console.log(this.donations);
  this.service.addDonations(this.donations).subscribe(
    data => { this.donationsForm.reset(); }
  );

}



}
