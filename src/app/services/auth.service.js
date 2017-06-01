"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var angular2_jwt_1 = require("angular2-jwt");
var AuthService = (function () {
    function AuthService() {
        var _this = this;
        // auth0 = new auth0.WebAuth({
        //     clientID: '-e5nHY8wWAbs3QHH744lBTXSzenrbWta',
        //     domain: 'adedev.eu.auth0.com',
        //     responseType: 'token id_token',
        //     audience: 'https://adedev.eu.auth0.com/userinfo',
        //     redirectUri: 'http://localhost:4200/callback',
        //     scope: 'openid'
        // });
        // Configure Auth0
        this.lock = new Auth0Lock('-e5nHY8wWAbs3QHH744lBTXSzenrbWta', 'adedev.eu.auth0.com', {
            auth: {
                responseType: 'token',
            },
            rememberLastLogin: true,
            theme: {
                logo: 'https://s-media-cache-ak0.pinimg.com/564x/56/4a/39/564a39f08728e7ccbfa0059639f0e95b.jpg',
                primaryColor: 'green'
            },
            closable: true,
        });
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", function (authResult) {
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    throw new Error(error);
                }
                localStorage.setItem('token', authResult.idToken);
                localStorage.setItem('profile', JSON.stringify(profile));
            });
        });
    }
    AuthService.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    ;
    AuthService.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return angular2_jwt_1.tokenNotExpired();
    };
    ;
    AuthService.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('profile');
    };
    ;
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map