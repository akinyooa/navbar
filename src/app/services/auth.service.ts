import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    // Configure Auth0
    options = {
        auth: {
            responseType: 'token',
            sso: true
        },
        rememberLastLogin: true,
        theme: {
            logo: 'https://s-media-cache-ak0.pinimg.com/564x/56/4a/39/564a39f08728e7ccbfa0059639f0e95b.jpg',
            primaryColor: 'green'
        },
        languageDictionary: {
            title: "Lurra"
        },
        closable: true,
        avatar: true,
        // uncomment if you want small buttons for social providers
        //socialButtonStyle: 'small'
    };

    lock = new Auth0Lock('-e5nHY8wWAbs3QHH744lBTXSzenrbWta', 'adedev.eu.auth0.com', this.options);

    constructor() {
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult: any) => {
            this.lock.getProfile(authResult.idToken, function (error: any, profile: any) {
                if (error) {
                    throw new Error(error);
                }
                localStorage.setItem('token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
            });
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'token'
        return tokenNotExpired();
    };

    public getUserProfilePicture() {
        if (localStorage.getItem('profile') != null) {
            return JSON.parse(localStorage.getItem('profile')).picture;
        }
    }

    public getUserName() {
        if (localStorage.getItem('profile') != null) {
            return JSON.parse(localStorage.getItem('profile')).name;
        }
    }

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
    };
}