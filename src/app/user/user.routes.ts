import {Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {UserSettingComponent} from './user-setting/user-setting.component';
import {UserPasswordComponent} from './user-password/user-password.component';

export const userRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'setting'
            },
            {
                path: 'setting',
                component: UserSettingComponent
            },
            {
                path: 'password',
                component: UserPasswordComponent,
                outlet: 'password'
            }
        ],
        component: UserComponent
    }

];
