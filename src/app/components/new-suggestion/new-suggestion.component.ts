import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'new-suggestion',
    templateUrl: 'new-suggestion.component.html'
})

export class NewSuggestionComponent {
    profile: any;
    suggestion: string;

    @ViewChild('newSuggestionModal') public newSuggestionModal: ModalDirective

    constructor(private authService: AuthService) {
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
