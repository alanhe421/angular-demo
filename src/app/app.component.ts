import {Component, OnInit} from '@angular/core';
import {fadeIn} from './animations/fade-in';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [fadeIn]
})
export class AppComponent implements OnInit {


    constructor() {
    }

    ngOnInit() {

    }

    backTop(e): void {
        e.preventDefault();
        document.documentElement.scrollTop = 0;
    }
}

