export class Suggestion {

    suggestion: string;
    posted_by: string;
    id: any;
    created: any;
    
    constructor(suggestion: string, postedBy: string) {
        this.suggestion = suggestion;
        this.posted_by = postedBy;
    }
}