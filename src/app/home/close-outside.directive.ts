import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
    selector: '[appCloseOutside]'
})
export class CloseOutsideDirective {

    constructor(el: ElementRef) {

    }

    @Output() clicking: EventEmitter<boolean> = new EventEmitter();

    @HostListener('click', ['$event']) click(e): void {
        if (e.target !== 'myModal') {
            this.clicking.emit(true);
        }
        console.log(e);
    };

}
