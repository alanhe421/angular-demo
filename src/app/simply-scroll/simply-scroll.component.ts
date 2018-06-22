import {Component, Input, OnInit} from '@angular/core';

/**
 * hover上去，停止滚动，离开继续
 * 点击上下按钮，停止自动滚动，进入手动模式
 * 支持循环滚动
 */
@Component({
    selector: 'app-simply-scroll',
    templateUrl: './simply-scroll.component.html',
    styleUrls: ['./simply-scroll.component.css']
})
export class SimplyScrollComponent implements OnInit {
    intervalId: number;

    @Input() config = new SimplyScrollConfig();

    constructor() {
    }

    ngOnInit() {
        this.intervalId = setInterval(() => {

            },
            1000);

    }

}

class SimplyScrollConfig {
    frameRate? = 24;
    speed? = 1;
    auto? = true;
}