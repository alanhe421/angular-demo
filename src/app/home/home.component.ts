import {Component, OnInit} from '@angular/core';
import {Modal} from './modal/modal';
import {Subject} from 'rxjs/Subject';
import {HttpClient} from '@angular/common/http';

declare const $: any;
declare const Mark: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    modal: Modal = new Modal();

    htmlSnippet = `<em class="highlight">hhwhqhwq</em>`;

    isList = false;

    keyword$ = new Subject<string>();

    name = new Subject<any>(); // 用户名主题
    currentDate = new Date();

    constructor(private http: HttpClient) {
        this.keyword$.debounceTime(400).subscribe(keyword => {
            this.performMark(keyword);
        });

        window.setInterval(() => {
            this.currentDate = new Date();
        }, 1000);
    }

    ngOnInit() {
        this.http.get('mock-data/news.json').subscribe(res => {
            this.name.next(res);
        });
        this.name.subscribe(res => {
            console.log(res);
        });
        $(function () {
            $.contextMenu({
                selector: '.context-menu-one',
                callback: function (itemKey, opt, rootMenu, originalEvent) {
                    var m = 'global: ' + itemKey;
                    console.log('originalEvent');
                    console.log(originalEvent);
                    window.console && console.log(m) || alert(m);
                },
                items: {
                    'edit': {
                        name: 'Edit',
                        icon: 'edit',
                        // superseeds "global" callback
                        callback: function (itemKey, opt, rootMenu, originalEvent) {
                            var m = 'edit was clicked';
                            window.console && console.log(m) || alert(m);
                        }
                    },
                    'cut': {name: 'Cut', icon: 'cut'},
                    'copy': {name: 'Copy', icon: 'copy'},
                    'paste': {name: 'Paste', icon: 'paste'},
                    'delete': {name: 'Delete', icon: 'delete'},
                    'sep1': '---------',
                    'quit': {
                        name: 'Quit', icon: function ($element, key, item) {
                            return 'context-menu-icon context-menu-icon-quit';
                        }
                    }
                }
            });
        });
        this.test();
        console.log(this.quickSort([3, 1, 2, 4, 19, 4]));
        this.getUsers().subscribe(res => {
            console.log(res);
        });
    }

    getUsers() {
        return this.http.get('/api/users');
    }


    performMark(keyword: string) {
        const instance = new Mark('.home-content');
        instance.unmark();
        if (keyword) {
            instance.mark(keyword);
        }
    }


    /**
     * 快速排序
     * @param {Array<number>} a
     * @returns {Array<number>}
     */
    quickSort(a: Array<number>) {
        return a.length <= 1 ? a : this.quickSort(a.slice(1).filter(item => item <= a[0])).concat(a[0], this.quickSort(a.slice(1).filter(item => item > a[0])));
    }


    test() {
        let links = document.getElementsByTagName('a');
        Array.from(links).forEach((item) => {
            item.protocol = 'https';
            console.log(item.href);
        });
    }

    testDataSet(event) {
        console.debug(event.target.dataset);
    }

    clickIt() {
        location.href = '/css1111';
    }


}
