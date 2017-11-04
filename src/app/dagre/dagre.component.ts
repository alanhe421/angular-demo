import {Component, OnInit} from "@angular/core";
import * as d3 from "d3";
import * as dagreD3 from "dagre-d3";
declare let $: any;
@Component({
    selector: 'app-dagre',
    templateUrl: './dagre.component.html',
    styleUrls: ['./dagre.component.css']
})
export class DagreComponent implements OnInit {

    // Create a new directed graph
    g: dagreD3.graphlib.Graph;
    render = new dagreD3.render();

    constructor() {
    }

    ngOnInit() {
        this.createDAG();
    }

    createDAG() {
        let svg = d3.select("svg"),
            inner = svg.select("g");

        // Create the input graph
        this.g = new dagreD3.graphlib.Graph({});
        // Set an object for the graph label
        this.g.setGraph({});
        // Default to assigning a new object as a label for each new edge.
        this.g.setDefaultEdgeLabel(function () {
            return {};
        });
        this.g.graph().transition = function (selection) {
            return selection.transition().duration(500);
        };

        // Set up zoom support
        var zoom = d3.behavior.zoom().on("zoom", function () {
            inner.attr("transform", "translate(" + d3.event.translate + ")" +
                "scale(" + d3.event.scale + ")");
        });
        svg.call(zoom);

        this.g.setNode(0, {label: 'VVV'});
        this.g.setNode(1, {label: "A"});
        this.g.setNode(2, {label: "B"});
        this.g.setNode(3, {labelType:"html",label: "<i class=\"fa fa-database\"></i>C"});
        this.g.setNode(4, {label:"D"});
        this.g.setNode(5, {label:"F"});

        this.g.setEdge(0, 1);
        this.g.setEdge(0, 2);
        this.g.setEdge(0, 4);
        this.g.setEdge(0, 5);
        this.g.setEdge(2, 3);

        // Run the renderer. This is what draws the final graph.
        this.render(inner, this.g);


        this.g.nodes().forEach((v) => {
            let node = this.g.node(v);
            console.log(`Node ${v}: Label:${node.label},X:${node.x},Y:${node.y}`);
        });

        //give IDs to each of the nodes so that they can be accessed
        svg.selectAll("g.node rect")
            .attr("id", function (d) {
                return "node" + d;
            });
        svg.selectAll("g.edgePath path")
            .attr("id", function (e) {
                return e.v + "-" + e.w;
            });
        svg.selectAll("g.edgeLabel g")
            .attr("id", function (e) {
                return 'label_' + e.v + "-" + e.w;
            });


        this.g.nodes().forEach((v) => {
            var node = this.g.node(v);
            node.customId = "node" + v;
        });
        this.g.edges().forEach((e) => {
            var edge = this.g.edge(e.v, e.w);
            edge.customId = e.v + "-" + e.w
        });

        // code for drag
        function dragstart(d) {
            d3.event.sourceEvent.stopPropagation();
        }

        let dragmover = (currentThis, d) => {
            this.dragmove(currentThis, d);
        };

        function dragmove(d) {
            dragmover(this, d)
        }

        let nodeDrag = d3.behavior.drag()
            .on("dragstart", dragstart)
            .on("drag", dragmove);

        let edgeDrag = d3.behavior.drag()
            .on("dragstart", dragstart)
            .on('drag', (d) => {
                this.translateEdge(this.g.edge(d.v, d.w), d3.event.dx, d3.event.dy);
                $('#' + this.g.edge(d.v, d.w).customId).attr('d', this.calcPoints(d));
            });

        nodeDrag.call(svg.selectAll("g.node"));
        edgeDrag.call(svg.selectAll("g.edgePath"));
    }

    /**
     * 添加节点
     */
    addNode() {
        d3.select("svg > g").remove();
        d3.select("svg").append("g");
        this.g.setNode(3, {label: "C"});
        this.render(d3.select(
            "svg").select("g"), this.g);
    }

    /**
     * 结点拖拽
     * d:nodeId
     */
    dragmove(currentThis, d) {
        var node = d3.select(currentThis),
            selectedNode = this.g.node(d);
        var prevX = selectedNode.x,
            prevY = selectedNode.y;

        selectedNode.x += d3.event.dx;
        selectedNode.y += d3.event.dy;
        node.attr('transform', 'translate(' + selectedNode.x + ',' + selectedNode.y + ')');

        var dx = selectedNode.x - prevX,
            dy = selectedNode.y - prevY;

        this.g.edges().forEach((e) => {
            if (e.v == d || e.w == d) {
                var edge = this.g.edge(e.v, e.w);
                this.translateEdge(this.g.edge(e.v, e.w), dx, dy);
                $('#' + edge.customId).attr('d', this.calcPoints(e));
                var label = $('#label_' + edge.customId);
                var xforms = label.attr('transform');
                var parts = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(xforms);
                var X = parseInt(parts[1]) + dx, Y = parseInt(parts[2]) + dy;
                label.attr('transform', 'translate(' + X + ',' + Y + ')');
            }
        })
    }

    //taken from dagre-d3 source code (not the exact same)
    intersectRect(node, point) {
        var x = node.x;
        var y = node.y;
        var dx = point.x - x;
        var dy = point.y - y;
        var w = $("#" + node.customId).attr('width') / 2;
        var h = $("#" + node.customId).attr('height') / 2;
        var sx = 0,
            sy = 0;
        if (Math.abs(dy) * w > Math.abs(dx) * h) {
            // Intersection is top or bottom of rect.
            if (dy < 0) {
                h = -h;
            }
            sx = dy === 0 ? 0 : h * dx / dy;
            sy = h;
        } else {
            // Intersection is left or right of rect.
            if (dx < 0) {
                w = -w;
            }
            sx = w;
            sy = dx === 0 ? 0 : w * dy / dx;
        }
        return {
            x: x + sx,
            y: y + sy
        };
    }

    //taken from dagre-d3 source code (not the exact same)
    calcPoints(e) {
        var edge = this.g.edge(e.v, e.w),
            tail = this.g.node(e.v),
            head = this.g.node(e.w);
        var points = edge.points.slice(1, edge.points.length - 1);
        var afterslice = edge.points.slice(1, edge.points.length - 1);
        points.unshift(this.intersectRect(tail, points[0]));
        points.push(this.intersectRect(head, points[points.length - 1]));
        return d3.svg.line()
            .x(function (d) {
                return d.x;
            })
            .y(function (d) {
                return d.y;
            })
            .interpolate("basis")
            (points);
    }


    translateEdge(e, dx, dy) {
        e.points.forEach(function (p) {
            p.x = p.x + dx;
            p.y = p.y + dy;
        });
    }


}