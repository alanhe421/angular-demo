import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-wallpaper',
    templateUrl: './wallpaper.component.html',
    styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent implements OnInit, OnDestroy {
    wallpapers = [
        'wallpaper-1.jpg',
        'wallpaper-2.jpg',
        'wallpaper-3.jpg',
        'wallpaper-4.jpg'
    ];
    current = 0;
    intervalId: number;

    constructor() {
    }

    ngOnInit() {
        this.intervalId = window.setInterval(
            () =>
                this.current + 1 === this.wallpapers.length ? this.current = 0 : ++this.current,
            1000
        );
    }

    ngOnDestroy() {

    }
}
