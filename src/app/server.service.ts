import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Donations} from './models/donations';
import {PrayerRequest} from './models/prayerRequest';
import {Newcomer} from './models/newcomer';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
baseUrl = environment.baseUrl;

prayerUrl =  this.baseUrl + '/addPrayer';
donationsrUrl = this.baseUrl + '/addDonations';
newcomerUrl = this.baseUrl + '/addNewcomer';


  constructor( private http: HttpClient) {}

  addPrayer(newPrayer: any): Observable<any> {
    return this.http.post<any>(this.prayerUrl, newPrayer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
// ADD NEWCOMER
  addNewcomer(newcomer: any): Observable<any> {
    return this.http.post<any>(this.newcomerUrl, newcomer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  addDonations(newDonations: Donations): Observable<Donations> {
    return this.http.post<Donations>(this.donationsrUrl, newDonations, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
