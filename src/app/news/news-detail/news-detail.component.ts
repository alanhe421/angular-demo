import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

    docId: string;
    searchId: string;
    htmlBlock = '';
    currentURL = window.location.href.indexOf('#') === -1 ? window.location.href : window.location.href.substring(0, window.location.href.indexOf('#'));

    constructor(private route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get('mock-data/news-detail.json').subscribe(res => {
            console.log(res);
            this.htmlBlock = res['data']['content'];
            console.log(this.route.snapshot.fragment);
            if (this.route.snapshot.fragment) {
                window.setTimeout(() => {
                    location.hash = this.route.snapshot.fragment;
                }, 500);
            }
        });
        this.route.paramMap.subscribe(paramMap => {
            this.docId = paramMap.get('id');
            this.searchId = this.route.snapshot.queryParamMap.get('searchId');
        });

        // let obsCombined = Observable.combineLatest(this.route.queryParams, this.route.params);
        // obsCombined.subscribe(ap => {
        //     alert('我变了');
        // });
    }

    contentChanged(event) {
        alert('你好');
        event.preventDefault();
        console.log('contentChanged');
    }


}

