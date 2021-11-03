import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    public layoutCssClass: string = "";

    public setLayoutCssClass() {
        if (this.layoutCssClass != "") {
            this.layoutCssClass = "";
        } else {
            this.layoutCssClass = "expand";
        }
    }
}
