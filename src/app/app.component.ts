import { Component, ViewChild } from '@angular/core';
import { AuthService } from './services/auth.service';
import { NewSuggestionComponent } from './components/new-suggestion/new-suggestion.component'
import { ModalDirective } from 'ngx-bootstrap';
import { LurraService } from "./services/lurra.service";
import { Suggestion } from "./model/suggestion";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  
  profile: any;
  suggestions: Suggestion[] = [];
  @ViewChild(NewSuggestionComponent) child: NewSuggestionComponent;
  public dropdownOpen: boolean;

  constructor(private authService: AuthService) { }

  logout() {
    this.authService.logout();
    this.dropdownOpen = false;
  }

  showSuggestionModal() {
    this.child.showSuggestionModal();
  }
}