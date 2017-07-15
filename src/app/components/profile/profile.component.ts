import { Component, HostBinding } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    animations: [moveIn(), fallIn(), moveInLeft()],
    host: {'[@moveIn]': ''}
})
export class ProfileComponent {
    profile: any;

    constructor(private authService: AuthService) {
        this.profile = JSON.parse(localStorage.getItem('profile'));
        console.log(this.profile);
    }
}
