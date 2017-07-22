import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ModalDirective } from 'ngx-bootstrap';
import { LurraService } from "../../services/lurra.service";
import { Suggestion } from "../../model/suggestion";
import { NewSuggestionService } from "../../services/new-suggestion.service";

@Component({
    moduleId: module.id,
    selector: 'new-suggestion',
    templateUrl: 'new-suggestion.component.html'
})

export class NewSuggestionComponent implements OnInit {
    profile: any;
    suggestionModel: Suggestion;
    suggestion: string;
    isSuggestionSubmitted: boolean;

    @ViewChild('newSuggestionModal') public newSuggestionModal: ModalDirective

    constructor(private authService: AuthService, private lurraService: LurraService, private newSuggestionService: NewSuggestionService) {
    }

    ngOnInit(): void {
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
        this.lurraService.addSuggestion(new Suggestion(this.suggestion, this.profile.user_id)).subscribe(
            response => {
                console.log(response);
                this.suggestion = "";
                this.newSuggestionService.publishData(response);
            },
            error => {
                console.log(error);
            });
        this.hideSuggestionModal();
    }
}
