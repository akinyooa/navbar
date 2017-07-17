import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule, BsDropdownModule, ButtonsModule } from 'ngx-bootstrap';

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewSuggestionComponent } from './components/new-suggestion/new-suggestion.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:
  [
    BrowserModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    routing,
    BrowserAnimationsModule],
  declarations:
  [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NewSuggestionComponent
  ],
  bootstrap: [AppComponent],
  providers:
  [
    appRoutingProviders,
    AuthService,
    AUTH_PROVIDERS
  ]
})
export class AppModule { }
