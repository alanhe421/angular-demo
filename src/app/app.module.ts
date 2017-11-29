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
import { TreeComponent } from './tree/tree.component';

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
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes),
    ],
    providers: [LoginService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
