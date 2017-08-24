import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ParentComponent} from "./parent.component";
import {RouterModule, Routes} from "@angular/router";
const appRoutes: Routes = [
    {
        path: '',
        component: ParentComponent
        // redirectTo: 'child',
        // pathMatch: 'full'
    },
    // {path: 'home', loadChildren: './i18n/i18n.module#I18nModule'},
    // {path: 'child', loadChildren: './child/child.module#ChildModule'},
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(appRoutes),
    ],
    declarations: [ParentComponent]
})
export class ParentModule {
}
