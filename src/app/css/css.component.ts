import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-css',
    templateUrl: './css.component.html',
    styleUrls: ['./css.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CssComponent implements OnInit, AfterViewInit {

    htmlCode = `<button class="txt-highlight">hello</button>`;

    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        const testTarget = document.getElementsByClassName('txt-highlight');
        testTarget[0].classList.add('txt-selected');
    }

    sayHello() {
        console.log('clicked');
    }
}
