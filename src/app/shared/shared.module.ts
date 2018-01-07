import {CommonModule} from '@angular/common';
import {SafePipe} from '../security/safe.pipe';
import {NgModule} from '@angular/core';
import {MotationObserverDirective} from './motation-observer.directive';
import {IsLoginDirective} from './is-login.directive';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [SafePipe, MotationObserverDirective, IsLoginDirective
    ],
    exports: [SafePipe, MotationObserverDirective, IsLoginDirective]
})
export class SharedModule {
}
