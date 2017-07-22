import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Suggestion } from "../model/suggestion";
import { environment } from '../../environments/environment';

@Injectable()
export class LurraService {
    apiServerBase = environment.apiServerBase;
    suggestionsApi = this.apiServerBase + "suggestions";
    
    constructor(private httpClient: HttpClient) { }
    
    getSuggestions() {
        return this.httpClient.get<Suggestion[]>(this.suggestionsApi);
    }

    addSuggestion(suggestion: Suggestion) {
        console.log(suggestion);
        return this.httpClient.post<Suggestion>(this.suggestionsApi, suggestion);
    }
}