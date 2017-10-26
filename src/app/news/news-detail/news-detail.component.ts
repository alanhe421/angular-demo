import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Rx";

@Component({
    selector: 'app-news-detail',
    templateUrl: './news-detail.component.html',
    styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        // this.route.queryParams.subscribe(qparams => {
        //     alert(qparams['title']);
        //     this.route.params.subscribe(params => {
        //         alert(params['id']);
        //     });
        // })

        let obsCombined = Observable.combineLatest(this.route.params, this.route.queryParams, (params, qparams) => ({
            params,
            qparams
        }));
        obsCombined.subscribe(ap => {
            console.log(ap);
            let params = ap['params'];
            let qparams = ap['qparams'];
            alert(qparams['title']);
            alert(params['id']);
        });
    }
}
