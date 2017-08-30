import {RouterModule, Routes} from "@angular/router";
import {SecurityComponent} from "./security.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
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
    ],
    declarations: [SecurityComponent]
})
export class SecurityModule {
}
