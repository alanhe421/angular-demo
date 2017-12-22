import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';
    private static previousRoutesUrl = new Array<string>();
    public scrollPos: any = {};
    public interval: any;
    public lastRoute: string;

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.router.events.subscribe((event: NavigationStart) => {
            if (event instanceof NavigationStart) {
                this.saveScroll();
                this.lastRoute = this.routeName(this.router.url);
            }
        }, error => console.error(error));
        this.router.events.subscribe((event: NavigationEnd) => {
            if (event instanceof NavigationEnd) {
                if (this.routeName(this.router.url) != this.lastRoute) {
                    console.log(`current  route ${this.router.url}`);
                    console.log(`previous route ${this.lastRoute}`);
                }
            }
        }, error => console.error(error));
    }

    loadMore(): void {
        // alert('加载更多');
    }

    /**
     * 搜索
     */
    search() {
        alert('searching!');
    }

    public resolveScroll() {

        var url = this.routeName(this.router.url);
        let position = this.scrollPos[url] ? this.scrollPos[url] : 0;

        if (position == 0)
            this.scrollTo(position);
        else if ($('html').height() >= position)
            this.scrollTo(position);
    }

    public scrollToTop() {
        console.log(`scrolling to top`);
        $('body, html').scrollTop(0);
    }

    public scrollTo(position) {
        if (!this.interval)
            return;

        console.log(`after waiting, scroll set to ${position}`);
        $('body, html').scrollTop(position);
        this.destroyScrollListener();
    }

    public destroyScrollListener() {
        clearInterval(this.interval);
        this.interval = null;
    }

    private routeName(url: string) {
        if (!url) return null;

        var slashIndex = url.indexOf('/');
        var matrixParamsIndex = url.indexOf(';') != -1 ? url.indexOf(';') : url.length;

        url = url.substring(slashIndex, matrixParamsIndex);

        return url;
    }

    @HostListener('window:popstate', ['$event'])
    public onPopState(event) {
        console.log(`setInverval waiting...`);
        this.interval = setInterval(() => this.resolveScroll(), 400);
        //console.log(`interval (${this.interval}) created`);
    }

    saveScroll() {
        let url = this.routeName(this.router.url);
        let position = Math.floor(window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);

        console.log(`saving (${position}) - ${url}`);

        this.scrollPos[url] = position;
    }

    @HostListener('window:scroll', ['$event'])
    public logScrollPosition(event) {
        let url = this.routeName(this.router.url);
        let position = Math.floor(window.scrollY);
        console.log(`log (not saving) (${position}) - ${url}`);
    }
}





