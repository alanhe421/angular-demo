import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    username: string;
    age = 18;
    xhr;
    treeData;

    constructor() {
    }

    ngOnInit() {
        this.xhr = new XMLHttpRequest();
        this.xhr.open('get', '/mock-data/tree.json');
        this.xhr.send();
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                this.treeData = this.xhr.response;
            }
        };
    }

}
