import {CommonModule} from '@angular/common';
import {SafePipe} from '../security/safe.pipe';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [SafePipe],
    exports: [SafePipe]
})
export class SharedModule {
}
