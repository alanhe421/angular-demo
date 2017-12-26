import {CommonModule} from '@angular/common';
import {SafePipe} from '../security/safe.pipe';
import {NgModule} from '@angular/core';
import {MotationObserverDirective} from './motation-observer.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [SafePipe, MotationObserverDirective,
    ],
    exports: [SafePipe, MotationObserverDirective]
})
export class SharedModule {
}
