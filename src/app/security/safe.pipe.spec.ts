import {SafePipe} from './safe.pipe';
import {DomSanitizer} from '@angular/platform-browser';

describe('SafePipe', () => {
    let sanitizer: DomSanitizer;
    it('create an instance', () => {
        const pipe = new SafePipe(sanitizer);
        expect(pipe).toBeTruthy();
    });
});
