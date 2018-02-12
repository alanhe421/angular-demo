import {CommonModule} from '@angular/common';
import {SafePipe} from '../security/safe.pipe';
import {NgModule} from '@angular/core';
import {MotationObserverDirective} from './motation-observer.directive';
import {IsLoginDirective} from './is-login.directive';
import {PopoverModule} from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        PopoverModule.forRoot(),
    ],
    declarations: [SafePipe, MotationObserverDirective, IsLoginDirective
    ],
    exports: [SafePipe, MotationObserverDirective, IsLoginDirective, PopoverModule]
})
export class SharedModule {
}
