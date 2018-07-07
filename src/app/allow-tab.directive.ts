import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appAllowTab]'
})
export class AllowTabDirective {

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', ['$event']) keyDown(e) {
        if (e.keyCode === 9) {
            e.preventDefault();
            // get caret position/selection
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            // set textarea value to: text before caret + tab + text after caret
            e.target.value = e.target.value.substring(0, start) + '\t' + e.target.value.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 1;
        }
    }

}
