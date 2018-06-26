import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
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

