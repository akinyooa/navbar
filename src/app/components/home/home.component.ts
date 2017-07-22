import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';
import { Suggestion } from "../../model/suggestion";
import { LurraService } from "../../services/lurra.service";
import { NewSuggestionService } from "../../services/new-suggestion.service";

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    animations: [moveIn(), fallIn(), moveInLeft()],
    host: { '[@moveIn]': '' }
})

export class HomeComponent implements OnInit {
    suggestions: Suggestion[] = [];

    constructor(private lurraService: LurraService, private newSuggestionService: NewSuggestionService) {
        this.newSuggestionService.suggestion$.subscribe((suggestion) => 
        {
            this.suggestions.unshift(suggestion);
        });
    }

    ngOnInit(): void {
        this.loadSuggestions();
    }

    loadSuggestions() {
        this.lurraService.getSuggestions()
            .subscribe((data: Suggestion[]) => 
            {
                this.suggestions = data;
            });
    }
}
