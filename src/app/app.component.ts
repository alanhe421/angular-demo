import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/pairwise';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

declare let $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private _routeScrollPositions: { [url: string]: number }[] = [];
    private _subscriptions: Subscription[] = [];

    constructor(private router: Router) {
    }

    ngOnInit() {
        // this._subscriptions.push(
        //     // save or restore scroll position on route change
        //     this.router.events.pairwise().subscribe(([prevRouteEvent, currRouteEvent]) => {
        //         if (prevRouteEvent instanceof NavigationEnd && currRouteEvent instanceof NavigationStart) {
        //             this._routeScrollPositions[prevRouteEvent.url] = window.pageYOffset;
        //         }
        //         if (currRouteEvent instanceof NavigationEnd) {
        //             window.scrollTo(0, this._routeScrollPositions[currRouteEvent.url] || 0);
        //         }
        //     })
        // );
    }

    // ngOnDestroy() {
    //     this._subscriptions.forEach(subscription => subscription.unsubscribe());
    // }
    //
    // isAnchorChange(preUrl: string, currUrl: string) {
    //     const removeHash = (str: string) => {
    //         return str.indexOf('#') === -1 ? str : str.substring(0, str.indexOf('#'));
    //     };
    //     return removeHash(preUrl) == removeHash(currUrl);
    //
    // }

}

