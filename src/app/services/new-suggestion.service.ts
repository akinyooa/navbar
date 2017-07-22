import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Suggestion } from "../model/suggestion";

@Injectable()
export class NewSuggestionService {

    suggestion = new Subject<Suggestion>();
    suggestion$ = this.suggestion.asObservable();

    publishData(suggestion: Suggestion) {
        this.suggestion.next(suggestion);
    }
}
