import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public dropdownOpen: boolean;

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout()
    this.dropdownOpen = false;
  }
}
