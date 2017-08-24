import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ParentComponent} from "./parent.component";
import {RouterModule, Routes} from "@angular/router";
const pRoutes: Routes = [
    {
        path: '',
        redirectTo: 'child',
        pathMatch: 'full'
    },
    {
        path: 'child',
        loadChildren: './child/child.module#ChildModule'
    }
    // {
    //     path: 'hello',
    //     component: ParentComponent,
    // }
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
