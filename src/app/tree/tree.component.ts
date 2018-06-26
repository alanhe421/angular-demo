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
    data: any;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get('mock-data/tree.json').subscribe(res => {
            this.treeArray = res['data'];
            this.treeView();
        });
    }

    treeView() {
        this.data = this.listtree(this.treeArray, null);
        console.log(this.data);
        $(this.tree.nativeElement).jstree({
            'core': {
                'data': this.data
            },
            'plugins': [
                'contextmenu', 'dnd', 'search',
                'state', 'types', 'wholerow'
            ]
        });
    }

    /**
     * 转化为树结构
     * @param data
     * @param id
     * @param list
     * @returns {any}
     */
    listtree(data, root) {
        const idTxt = 'id';
        const pidTxt = 'parentId';
        const pushTxt = 'children';

        // 递归方法
        function getNode(id) {
            let nodes = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i][pidTxt] == id) {
                    data[i][pushTxt] = getNode(data[i][idTxt]);
                    let node = {
                        id: data[i][idTxt],
                        text: data[i]['text']
                    };
                    if (data[i][pushTxt]) {
                        node[pushTxt] = data[i][pushTxt];
                    }
                    nodes.push(node);
                }
            }
            if (nodes.length == 0) {
                return;
            } else {
                return nodes;
            }
        }

        // 使用根节点
        return getNode(root);
    }
}
