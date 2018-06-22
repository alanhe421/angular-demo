import {AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
    selector: 'app-docs',
    templateUrl: './docs.component.html',
    styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit, AfterViewInit {

    pageSizes = [10, 20, 30, 40, 50];
    pageSize = 40;
    @ViewChild('slides') slides: ElementRef;
    intervalId: number;
    pics = [1, 2, 3, 4, 5, 6];

    constructor(private render: Renderer2) {
    }

    ngOnInit() {
        this.createDomElement();
        this.autoStart();
    }

    stop() {
        clearInterval(this.intervalId);
    }


    autoStart() {
        this.intervalId = setInterval(() => {
                let position = this.getCurrentPosition();
                if (position === (-200 * 4)) { // 显示宽+初始化位置
                    position = -200; // 无缝循环
                }
                this.render.setStyle(this.slides.nativeElement, 'left', position + 'px');
            }, 50
        );
    }

    @HostListener('mouseover', ['$event.target']) hovered(element: HTMLElement) {
        if (element.tagName === 'IMG') {
            clearInterval(this.intervalId);
        }
    }

    @HostListener('mouseout', ['$event.target']) outed(element: HTMLElement) {
        if (element.tagName === 'IMG') {
            this.autoStart();
        }
    }

    private getCurrentPosition(): number {
        const currentValue = getComputedStyle(this.slides.nativeElement).left;
        return +currentValue.substring(0, currentValue.indexOf('px')) - 1;
    }

    changeSelector(event) {
        alert(event.target.value);
    }

    createDomElement() {
        let domObj = document.createElement('div');
        domObj.innerHTML = '<div>日本人</div><div id="test">中国人</div>';
        console.log(domObj.querySelector('#test').innerHTML);
    }

    ngAfterViewInit() {
        const length = this.slides.nativeElement.children.length;
        if (length === 0) {
            return;
        }
        const first = this.slides.nativeElement.children[0].cloneNode(true);
        const last = this.slides.nativeElement.children[length - 1].cloneNode(true);
        this.render.appendChild(this.slides.nativeElement, first);
        this.render.insertBefore(this.slides.nativeElement, last, this.slides.nativeElement.children[0]);
    }

}
