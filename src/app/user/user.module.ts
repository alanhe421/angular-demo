import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserSettingComponent} from './user-setting/user-setting.component';
import {UserPasswordComponent} from './user-password/user-password.component';
import {RouterModule} from '@angular/router';
import {userRoutes} from './user.routes';
import {UserComponent} from './user.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [UserComponent, UserSettingComponent, UserPasswordComponent]
})
export class UserModule {
}
