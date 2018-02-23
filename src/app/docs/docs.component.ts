import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-docs',
    templateUrl: './docs.component.html',
    styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

    pageSizes = [10, 20, 30, 40, 50];
    pageSize = 40;

    constructor() {
    }

    ngOnInit() {
        this.createDomElement();
    }

    changeSelector(event) {
        alert(event.target.value);
    }

    createDomElement() {
        let domObj = document.createElement('div');
        domObj.innerHTML = '<div>日本人</div><div id="test">中国人</div>';
        console.log(domObj.querySelector('#test').innerHTML);
    }
}
