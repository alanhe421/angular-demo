import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare const $: any;

@Component({
    selector: 'app-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

    treeArray = [];
    @ViewChild('tree') tree: ElementRef;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get('mock-data/tree.json').subscribe(res => {
            this.treeArray = res['data'];
            this.treeView();
        });
    }

    treeView() {
        let data = [];
        this.treeArray.forEach(item => {
            data.push({
                id: item['id'],
                text: item['name']
            });
        });

        $(this.tree.nativeElement).jstree({
            'core': {
                'data': data
            },
            'plugins': [
                'contextmenu', 'dnd', 'search',
                'state', 'types', 'wholerow'
            ]
        });
    }


}
