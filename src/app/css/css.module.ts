import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CssComponent} from './css.component';
import {RouterModule, Routes} from '@angular/router';
import {CssChildComponent} from './css-child/css-child.component';
import {SharedModule} from '../shared/shared.module';

const pRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CssComponent
            },
            {
                path: 'child',
                component: CssChildComponent,
            }]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(pRoutes),
        SharedModule
    ],
    declarations: [CssComponent, CssChildComponent]
})
export class CssModule {
}
