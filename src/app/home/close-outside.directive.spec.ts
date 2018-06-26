import {CloseOutsideDirective} from './close-outside.directive';
import {ElementRef} from '@angular/core';

describe('CloseOutsideDirective', () => {
    let el: ElementRef;
    it('should create an instance', () => {
        const directive = new CloseOutsideDirective(el);
        expect(directive).toBeTruthy();
    });
});
