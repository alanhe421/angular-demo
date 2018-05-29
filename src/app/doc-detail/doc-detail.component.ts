import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-doc-detail',
    templateUrl: './doc-detail.component.html',
    styleUrls: ['./doc-detail.component.css']
})
export class DocDetailComponent implements OnInit {

    id: string;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(res => {
            this.id = res.get('id');
        });
    }

}
