import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule, BsDropdownModule } from 'ngx-bootstrap';

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, ModalModule.forRoot(), BsDropdownModule.forRoot(), routing, BrowserAnimationsModule],
  declarations: [AppComponent, HomeComponent, ProfileComponent],
  bootstrap: [AppComponent],
  providers: [
    appRoutingProviders,
    AuthService,
    AUTH_PROVIDERS
  ]
})
export class AppModule { }
