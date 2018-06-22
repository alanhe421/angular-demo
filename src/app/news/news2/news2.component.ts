import {Component, OnInit} from '@angular/core';
import {ListComponent} from '../../list/list.component';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-news2',
    templateUrl: './news2.component.html',
    styleUrls: ['./news2.component.css']
})
export class News2Component extends ListComponent {

    constructor(http: HttpClient) {
        super(http);
    }

    ngOnInit() {
        console.log('this.isList');
        console.log(this.isList);
    }


}
