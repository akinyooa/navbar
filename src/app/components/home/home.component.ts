import { Component, HostBinding } from '@angular/core';
import { moveIn, fallIn, moveInLeft } from '../../router.animations';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    animations: [moveIn(), fallIn(), moveInLeft()],
    host: {'[@moveIn]': ''}
})

export class HomeComponent {
    profile: any;

    constructor() {
    }
}
