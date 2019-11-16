// angular plateform modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';

// services
import { ServerService } from './server.service';

// typescript front end component mvc modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { DonationsComponent } from './donations/donations.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ServicesComponent } from './services/services.component';
import { PrayerComponent } from './prayer/prayer.component';
import { NewcomerComponent } from './newcomer/newcomer.component';
import { NotFoundComponent } from './not-found/not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    FooterComponent,
    DonationsComponent,
    EventsComponent,
    ContactComponent,
    ProfileComponent,
    ServicesComponent,
    PrayerComponent,
    NewcomerComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
