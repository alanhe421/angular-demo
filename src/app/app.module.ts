import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, Http} from "@angular/http";
import {AppComponent} from "./app.component";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { I18nComponent } from './i18n/i18n.component';
import { MyhighlightDirective } from './myhighlight.directive';
import { ChildComponent } from './child/child.component';
import { NodataComponent } from './nodata/nodata.component';
import {BsDropdownModule} from "ngx-bootstrap";
import {InfiniteScrollDirective} from "./infinite-scroll.directive";

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    I18nComponent,
    MyhighlightDirective,
    InfiniteScrollDirective,
    ChildComponent,
    NodataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
