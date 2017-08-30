import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DocsComponent} from "./docs/docs.component";
/**
 * Created by He on 24/08/2017.
 */
export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {path: 'home', component: HomeComponent},
    {path: 'parent', loadChildren: './parent/parent.module#ParentModule'},
    {path: 'security', loadChildren: './security/security.module#SecurityModule'},
    {path: 'docs', component: DocsComponent},
];