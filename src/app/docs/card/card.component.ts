import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    header: string = 'header';
    footer: string = 'footer';

    constructor(private render: Renderer2, private el: ElementRef) {
    }

    ngOnInit() {
    }

    addClass() {
        this.render.addClass(this.el.nativeElement, 'danger');
    }

    removeClass() {
        this.render.removeClass(this.el.nativeElement, 'danger');
    }

}
