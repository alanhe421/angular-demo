import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

    items = [{
        id: 1,
        title: "早安地球1",
    },
        {
            id: 2,
            title: "早安地球2",
        },
        {
            id: 3,
            title: "早安地球3",
        },
        {
            id: 4,
            title: "早安地球4",
        }];

    constructor() {
    }

    ngOnInit() {
    }

}
