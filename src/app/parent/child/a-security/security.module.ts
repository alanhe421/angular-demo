import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SecurityComponent} from "./security.component";
import {RouterModule, Routes} from "@angular/router";
const cRoutes: Routes = [
    {
        path: '',
        component: SecurityComponent,
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(cRoutes)
    ],
    declarations: [SecurityComponent]
})
export class SecurityModule {
}
