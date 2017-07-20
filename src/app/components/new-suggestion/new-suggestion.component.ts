import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'new-suggestion',
    templateUrl: 'new-suggestion.component.html'
})

export class NewSuggestionComponent {
    profile: any;

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

    onFormSubmit(suggestionForm: NgForm) {
        console.log(suggestionForm.value);
        console.log('Suggestion:' + suggestionForm.controls['suggestion'].value);
    }
}
