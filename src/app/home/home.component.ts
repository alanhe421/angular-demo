import {Component, OnInit} from '@angular/core';
import {Modal} from './modal/modal';

declare let $: any;

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    modal: Modal = new Modal();

    htmlSnippet = `<em class="highlight">hhwhqhwq</em>`;

    isList = false;

    constructor() {
    }

    ngOnInit() {
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

    }

}
