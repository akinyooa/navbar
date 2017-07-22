import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Suggestion } from "../model/suggestion";

@Injectable()
export class LurraService {
    apiServerBase = "http://localhost:3010/api/v1/";
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