import {RouterModule, Routes} from '@angular/router';
import {SecurityComponent} from './security.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

const pRoutes: Routes = [
    {
        path: '',
        component: SecurityComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(pRoutes),
        SharedModule
    ],
    declarations: [SecurityComponent]
})
export class SecurityModule {
}
