import {Component} from '@angular/core';
import {ListComponent} from '../list/list.component';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styleUrls: ['./news-list.component.css']
})
export class NewsListComponent extends ListComponent {

    isList = true;
    searchId = '21212121212';
    items = [
        {title: '1111'},
        {title: '2222'},
        {title: '3333'},
        {title: '4444'},
    ];

    constructor(http: HttpClient) {
        super(http);
    }

    ngOnInit() {
        console.log('this.isList');
        console.log(this.isList);
    }

    viewTypeChanged() {
        console.log(typeof this.isList);
    }
}
