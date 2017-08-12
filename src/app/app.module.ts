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
import {RouterModule, Routes} from "@angular/router";
import {DocsComponent} from "./docs/docs.component";
import {CardComponent} from "./docs/card/card.component";

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    // {path: 'home', loadChildren: './i18n/i18n.module#I18nModule'},
    // {path: 'i18n', loadChildren: './i18n/i18n.module#I18nModule'},
    {path: 'docs', component: DocsComponent},
];
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
        CardComponent
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
