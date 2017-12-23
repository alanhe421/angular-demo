import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

    docId: string;
    searchId: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(paramMap => {
            this.docId = paramMap.get('id');
            this.searchId = this.route.snapshot.queryParamMap.get('searchId');
        });

        // let obsCombined = Observable.combineLatest(this.route.queryParams, this.route.params);
        // obsCombined.subscribe(ap => {
        //     alert('我变了');
        // });
    }
}
