import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {PrayerRequest} from '../models/prayerRequest'
import { ServerService } from '../server.service';
import { Observable  } from 'rxjs';

@Component({
  selector: 'app-prayer',
  templateUrl: './prayer.component.html',
  styleUrls: ['./prayer.component.css']
})
export class PrayerComponent implements OnInit {
 prayer = new PrayerRequest();
  prayerrequestForm: FormGroup;

  constructor( private service: ServerService) { }


  ngOnInit() {
   this.prayerrequestForm = new FormGroup({
      name : new FormControl(''),
      email: new FormControl(''),
      tel: new FormControl(''),
      message: new FormControl(''),
      anonymous : new FormControl('')
     });
  }
  mapFromDataToPrayer() {
    this.prayer.fullname = this.prayerrequestForm.value.name;
    this.prayer.email = this.prayerrequestForm.value.email;
    this.prayer.tel = this.prayerrequestForm.value.tel;
    this.prayer.message = this.prayerrequestForm.value.message;
    this.prayer.anonymous = this.prayerrequestForm.value.anonymous;
  }

  addPlayer() {
    this.mapFromDataToPrayer();
    this.service.addPrayer(this.prayer).subscribe(
      data => { this.prayerrequestForm.reset()}
    );
  }

}
