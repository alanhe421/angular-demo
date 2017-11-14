import {Component, OnInit} from "@angular/core";
import {ListComponent} from '../list/list.component';

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.css']
})
export class NewsListComponent extends ListComponent {



    constructor() {
        super();
    }

    ngOnInit() {
    }

}
