import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-life',
    templateUrl: './life.component.html',
    styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {

    count = 0;

    text = '';

    constructor() {
    }

    ngOnInit() {

    }

    handlePlusClick() {
        this.count++;
    }

}
