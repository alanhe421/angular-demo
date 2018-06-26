import {OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
