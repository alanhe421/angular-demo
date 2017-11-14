import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    items = [{
        id: 1,
        title: '早安地球1',
    },
        {
            id: 2,
            title: '早安地球2',
        },
        {
            id: 3,
            title: '早安地球3',
        },
        {
            id: 4,
            title: '早安地球4',
        }];

    constructor() {
    }

    ngOnInit() {
    }

}
