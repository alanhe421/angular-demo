import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app works!';

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
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

    onActivate(e, outlet) {
        outlet.scrollTop = 0;
    }

    onDeactivate() {
        document.body.scrollTop = 0;
    }
}





