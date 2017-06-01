import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [BrowserModule, ModalModule.forRoot()],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    AUTH_PROVIDERS
  ]
})
export class AppModule { }
