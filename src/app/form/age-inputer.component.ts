import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-age-inputer',
    templateUrl: './age-inputer.component.html'
})
export class AgeInputerComponent implements OnInit {
    @Input()



    @Output()
    ageChange = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    set age(val) {

    }

}
