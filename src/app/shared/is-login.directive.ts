import {Directive, HostListener} from '@angular/core';

/**
 * 监听click,未登录，提示登录
 */
@Directive({
    selector: '[appIsLogin]'
})
export class IsLoginDirective {

    constructor() {
    }

    @HostListener('click', ['$event'])
    onClick(event: Event): void {
        alert('appIsLogin');
        event.preventDefault();
    }
}
