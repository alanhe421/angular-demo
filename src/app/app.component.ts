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
        this.fizzbuzz(100);
    }

    ngOnInit() {
    }

    backTop(e): void {
        e.preventDefault();
        document.documentElement.scrollTop = 0;
    }

    fizzbuzz(n) {
        for (let i = 1; i <= n; i++) {
            let out = '';
            if (i % 3 === 0) {
                out += 'Fizz';
            }
            if (i % 5 === 0) {
                out += 'Buzz';
            }
            if (out !== '') {
                return out;
            }
            return out;
        }
    }
}

