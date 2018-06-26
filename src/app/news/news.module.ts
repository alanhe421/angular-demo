import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsDetailComponent} from './news-detail/news-detail.component';
import {NewsListComponent} from './news-list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {SocialShareComponent} from './social-share/social-share.component';
import {News2Component} from './news2/news2.component';
import {ModalModule, TooltipModule} from 'ngx-bootstrap';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {path: 'list', component: NewsListComponent},
    {path: 'list2', component: News2Component},
    {path: 'detail/:id', component: NewsDetailComponent},
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        ModalModule.forRoot(),
        TooltipModule.forRoot(),
        SharedModule
    ],
    declarations: [NewsDetailComponent, NewsListComponent, SocialShareComponent, News2Component]
})
export class NewsModule {
}
