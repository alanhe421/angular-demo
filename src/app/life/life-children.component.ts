import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';

@Component({
    selector: 'app-life-children',
    templateUrl: './life-children.component.html',
    styleUrls: ['./life.component.css']
})
export class LifeChildrenComponent implements OnInit, OnChanges {

    @Input() count = 0;

    constructor() {
    }

    ngOnInit() {

    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        console.log(changes);
    }
}
