import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    // auth0 = new auth0.WebAuth({
    //     clientID: '-e5nHY8wWAbs3QHH744lBTXSzenrbWta',
    //     domain: 'adedev.eu.auth0.com',
    //     responseType: 'token id_token',
    //     audience: 'https://adedev.eu.auth0.com/userinfo',
    //     redirectUri: 'http://localhost:4200/callback',
    //     scope: 'openid'
    // });

    // Configure Auth0
    lock = new Auth0Lock('-e5nHY8wWAbs3QHH744lBTXSzenrbWta', 'adedev.eu.auth0.com', {
        auth: {
            responseType: 'token',
        },
        rememberLastLogin: true,
        theme: {
            logo: 'https://s-media-cache-ak0.pinimg.com/564x/56/4a/39/564a39f08728e7ccbfa0059639f0e95b.jpg',
            primaryColor: 'green'
        },
        closable: true,
        // uncomment if you want small buttons for social providers
         socialButtonStyle: 'small'
    });

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
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
    };
}