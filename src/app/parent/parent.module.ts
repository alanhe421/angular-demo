import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ParentComponent} from "./parent.component";
import {RouterModule, Routes} from "@angular/router";
const pRoutes: Routes = [
    {
        path: '',
        redirectTo: 'security1',
        pathMatch: 'full'
    },
    // {
    //     path: 'child',
    //     loadChildren: './child/child.module#ChildModule'
    // }
    {
        path: 'security1',
        loadChildren: '../security/security.module#SecurityModule'
    },
    {
        path: 'security2',
        loadChildren: '../css/css.module#CssModule'
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(pRoutes),
    ],
    declarations: [ParentComponent]
})
export class ParentModule {
}
