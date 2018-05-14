import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DocsComponent} from './docs/docs.component';
import {DagreComponent} from './dagre/dagre.component';
import {DynamicComponent} from './dynamic/dynamic.component';
import {LoginComponent} from './login/login.component';
import {TreeComponent} from './tree/tree.component';
import {JsplumbComponent} from './jsplumb/jsplumb.component';
import {SocketIoComponent} from './socket-io/socket-io.component';

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
        {path: 'socket', component: SocketIoComponent},

        // {path: 'parent', loadChildren: './parent/parent.module#ParentModule'},
        {path: 'css', loadChildren: './css/css.module#CssModule'},
        {
            path: 'security',
            loadChildren: './security/security.module#SecurityModule'
        },
        {
            path: 'parent',
            loadChildren: './parent/parent.module#ParentModule'
        },
        {
            path: 'news',
            loadChildren: './news/news.module#NewsModule'
        }
        ,
// children: [
//     {
//         path: 'security1',
//         loadChildren: './security/security.module#SecurityModule'
//     },
//     {
//         path: 'security2',
//         loadChildren: './css/css.module#CssModule'
//     }
// ]

        {
            path: 'docs', component: DocsComponent
        },
        {
            path: 'dagre', component: DagreComponent
        },
        {
            path: 'jsplumb', component: JsplumbComponent
        },
        {
            path: 'tree', component: TreeComponent
        },
        {
            path: 'dynamic', component: DynamicComponent
        },
        {
            path: 'login', component: LoginComponent
        },
        {
            path: 'user', loadChildren: './user/user.module#UserModule'
        }
    ]
;