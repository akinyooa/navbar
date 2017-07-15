import { Component, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  profile: any;
  @ViewChild('newSuggestionModal') public newSuggestionModal: ModalDirective

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  showSuggestionModal() {
    if (!this.profile) {
      this.profile = JSON.parse(localStorage.getItem('profile'));
    }
    this.newSuggestionModal.show();
  }

  hideSuggestionModal() {
    this.newSuggestionModal.hide();
  }

  submitSuggestion() {
    this.hideSuggestionModal();
  }
}
