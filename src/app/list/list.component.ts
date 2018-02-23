import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    items = [];
    isList = false;

    constructor(protected http: HttpClient) {
    }

    ngOnInit() {
        this.http.get('mock-data/news.json').subscribe(res => {
            this.items = res['data'];
        });
    }

}
