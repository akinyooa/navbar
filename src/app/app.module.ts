import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule, BsDropdownModule, ButtonsModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NewSuggestionComponent } from './components/new-suggestion/new-suggestion.component';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LurraService } from "./services/lurra.service";
import { HttpClientModule } from "@angular/common/http";
import { NewSuggestionService } from "./services/new-suggestion.service";

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  imports:
  [
    BrowserModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    routing,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
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
    LurraService,
    NewSuggestionService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    }
  ]
})
export class AppModule { }
