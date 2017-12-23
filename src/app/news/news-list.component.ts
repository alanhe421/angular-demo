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

    constructor(http: HttpClient) {
        super(http);
    }

    viewTypeChanged() {
        console.log(typeof this.isList);
    }
}
