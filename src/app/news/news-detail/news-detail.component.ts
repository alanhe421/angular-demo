import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

declare let $: any;

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

    constructor(private route: ActivatedRoute, private http: HttpClient, private title: Title) {
    }

    ngOnInit() {
        this.http.get('mock-data/news-detail.json').subscribe(res => {
            console.log(res);
            this.htmlBlock = res['data']['content'];
            console.log(this.route.snapshot.fragment);
        });
        this.route.paramMap.subscribe(paramMap => {
            this.docId = paramMap.get('id');
            this.searchId = this.route.snapshot.queryParamMap.get('searchId');
            this.setTitle(this.docId);
        });

        // let obsCombined = Observable.combineLatest(this.route.queryParams, this.route.params);
        // obsCombined.subscribe(ap => {
        //     alert('我变了');
        // });
    }


    positionTOAnchor() {
        location.hash = this.route.snapshot.fragment;
    }

    setTitle(title: string) {
        this.title.setTitle(title);
    }

}

