import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MyhighlightDirective} from './myhighlight.directive';
import {ChildComponent} from './child/child.component';
import {NodataComponent} from './nodata/nodata.component';
import {InfiniteScrollDirective} from './infinite-scroll.directive';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {DocsComponent} from './docs/docs.component';
import {CardComponent} from './docs/card/card.component';
import {HomeComponent} from './home/home.component';
import {appRoutes} from './app.routes';
import {ModalComponent} from './home/modal/modal.component';
import {CloseOutsideDirective} from './home/close-outside.directive';
import {DagreComponent} from './dagre/dagre.component';
import {DynamicComponent} from './dynamic/dynamic.component';
import {ListComponent} from './list/list.component';
import {LoginComponent} from './login/login.component';
import {LoginService} from './login/login.service';
import {HttpClientModule} from '@angular/common/http';
import {TreeComponent} from './tree/tree.component';
import {JsplumbComponent} from './jsplumb/jsplumb.component';
import {AlertComponent} from './dynamic/exe-alert.component';
import {SharedModule} from './shared/shared.module';
import {SocialShareComponent} from './social-share/social-share.component';
import {RetainScrollPolyfillModule} from './polyfill/retain-scroll-polyfill/retain-scroll-polyfill.module';

@NgModule({
    declarations: [
        AppComponent,
        MyhighlightDirective,
        InfiniteScrollDirective,
        ChildComponent,
        NodataComponent,
        HeaderComponent,
        FooterComponent,
        DocsComponent,
        CardComponent,
        HomeComponent,
        ModalComponent,
        CloseOutsideDirective,
        DagreComponent,
        DynamicComponent,
        ListComponent,
        LoginComponent,
        TreeComponent,
        JsplumbComponent,
        AlertComponent,
        SocialShareComponent
    ],
    imports: [
        BrowserModule,
        RetainScrollPolyfillModule.forRoot({
            // Tell the polyfill how long to poll the document after a route change in
            // order to look for elements that need to be restored to a previous offset.
            pollDuration: 3000,
            pollCadence: 50
        }),
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
        SharedModule
    ],
    providers: [LoginService],
    bootstrap: [AppComponent],
    entryComponents: [AlertComponent], // 动态组件
})
export class AppModule {
}
