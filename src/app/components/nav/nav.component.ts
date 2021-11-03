import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})

export class NavComponent {
    @Output() setLayoutCssClass = new EventEmitter();

    constructor(private router: Router) {

    }

    public toggleMenu() {
        this.setLayoutCssClass.emit();
    }

    public navigateTo(url: string) {
        this.router.navigateByUrl(url);
    }
}
