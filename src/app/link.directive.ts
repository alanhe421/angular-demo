import {Directive, Input, OnInit} from '@angular/core';
import {RouterLinkWithHref} from '@angular/router';

/**
 * 修改挂载的routerLink链接
 */
@Directive({
    selector: 'a[routerLink][appLink]'
})
export class LinkDirective implements OnInit {
    @Input()
    queryParams: { [k: string]: any };

    constructor(private link: RouterLinkWithHref) {
    }

    ngOnInit(): void {
        this.link.queryParams = this.queryParams;
        console.log('原来的params');
        console.log(this.link.queryParams);

        this.link.queryParams['b'] = 2;
        console.log('现在的params');
        console.log(this.link.queryParams);
        // this.link.href += '&b=2';
    }
}
