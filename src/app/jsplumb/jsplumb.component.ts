import {Component, OnInit} from '@angular/core';

declare let jsPlumb: any;
declare let $: any;

@Component({
    selector: 'app-jsplumb',
    templateUrl: './jsplumb.component.html',
    styleUrls: ['./jsplumb.component.css']
})
export class JsplumbComponent implements OnInit {


    jsPlumbInstance: any;


    constructor() {
    }

    ngOnInit() {
        this.draw();
    }

    draw() {
        this.jsPlumbInstance = jsPlumb.getInstance({
            // default drag options
            DragOptions: {cursor: 'pointer', zIndex: 2000},
            // the overlays to decorate each connection with.  note that the label overlay uses a function to generate the label text; in this
            // case it returns the 'labelText' member that we set on each connection in the 'init' method below.
            ConnectionOverlays: [
                ['Arrow', {
                    location: 1,
                    visible: true,
                    width: 11,
                    length: 11,
                    id: 'ARROW',
                    events: {
                        click: function () {
                            alert('you clicked on the arrow overlay')
                        }
                    }
                }],
                ['Label', {
                    location: 0.1,
                    id: 'label',
                    cssClass: 'aLabel',
                    events: {
                        // connection.getOverlay("label")
                        tap: function () {
                            let label = prompt('请输入标签文字：');
                            this.setLabel(label);
                        }
                    }
                }]
            ],
            Container: 'canvas'
        });
        var basicType = {
            connector: 'StateMachine',
            paintStyle: {stroke: 'red', strokeWidth: 4},
            hoverPaintStyle: {stroke: 'blue'},
            overlays: [
                'Arrow'
            ]
        };

        this.jsPlumbInstance.registerConnectionType('basic', basicType);

        // 支持拖拽
        this.jsPlumbInstance.draggable('flowchartWindow1');
        this.jsPlumbInstance.draggable('flowchartWindow2');
        this.jsPlumbInstance.draggable('flowchartWindow3');
        this.jsPlumbInstance.draggable('flowchartWindow4');

        this.jsPlumbInstance.connect({
            source: 'flowchartWindow1', // 源端点
            target: 'flowchartWindow2', // 目标端点
            editable: true
        });

        // 增加端点
        this.jsPlumbInstance.addEndpoint('flowchartWindow1');
        this.jsPlumbInstance.addEndpoint('flowchartWindow2');


        // listen for clicks on connections, and offer to delete connections on click.
        //
        this.jsPlumbInstance.bind('click', function (conn, originalEvent) {
            // if (confirm("Delete connection from " + conn.sourceId + " to " + conn.targetId + "?"))
            //   instance.detach(conn);
            conn.toggleType('basic');
        });

        this.jsPlumbInstance.bind('connectionDrag', function (connection) {
            console.log('connection ' + connection.id + ' is being dragged. suspendedElement is ', connection.suspendedElement, ' of type ', connection.suspendedElementType);
        });

        this.jsPlumbInstance.bind('connectionDragStop', function (connection) {
            console.log('connection ' + connection.id + ' was dragged');
        });

        this.jsPlumbInstance.bind('connectionMoved', function (params) {
            console.log('connection ' + params.connection.id + ' was moved');
        });

    }


}
