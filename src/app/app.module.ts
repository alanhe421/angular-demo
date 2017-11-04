import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {Http, HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MyhighlightDirective} from "./myhighlight.directive";
import {ChildComponent} from "./child/child.component";
import {NodataComponent} from "./nodata/nodata.component";
import {BsDropdownModule} from "ngx-bootstrap";
import {InfiniteScrollDirective} from "./infinite-scroll.directive";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterModule} from "@angular/router";
import {DocsComponent} from "./docs/docs.component";
import {CardComponent} from "./docs/card/card.component";
import {HomeComponent} from "./home/home.component";
import {appRoutes} from "./app.routes";
import {ModalComponent} from "./home/modal/modal.component";
import {CloseOutsideDirective} from "./home/close-outside.directive";
import { DagreComponent } from './dagre/dagre.component';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
        BsDropdownModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
