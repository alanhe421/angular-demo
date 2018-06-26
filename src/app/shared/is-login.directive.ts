import {Directive, HostListener} from '@angular/core';

/**
 * 监听click,未登录，提示登录
 */
@Directive({
    selector: '[appIsLogin]'
})
export class IsLoginDirective {

    isLoginIn = false;

    constructor() {
    }

    @HostListener('mousedown', ['$event'])
    onClick(event: Event): boolean {
        if (!this.isLoginIn) {
            console.log('mousedown');
            event.preventDefault();
            event.stopPropagation();
            return false;
        }
        return true;
    }
}
