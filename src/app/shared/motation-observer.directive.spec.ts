import {MotationObserverDirective} from './motation-observer.directive';
import {ElementRef} from '@angular/core';

describe('MotationObserverDirective', () => {
    let el: ElementRef;
    it('should create an instance', () => {
        const directive = new MotationObserverDirective(el);
        expect(directive).toBeTruthy();
    });
});
