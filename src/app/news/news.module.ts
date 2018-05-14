import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsDetailComponent} from './news-detail/news-detail.component';
import {NewsListComponent} from './news-list.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {SocialShareComponent} from './social-share/social-share.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {path: 'list', component: NewsListComponent},
    {path: 'detail/:id', component: NewsDetailComponent},
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        SharedModule
    ],
    declarations: [NewsDetailComponent, NewsListComponent, SocialShareComponent]
})
export class NewsModule {
}
