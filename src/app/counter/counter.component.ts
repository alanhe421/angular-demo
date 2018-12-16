import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {select, Store} from '@ngrx/store';
import {Decrement, Increment, Reset} from '../counter.actions';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
    count$: Observable<number>;

    constructor(private store: Store<{ count: number }>) {
        this.count$ = store.pipe(select('count'));

    }

    ngOnInit() {
    }

    increment() {
        this.store.dispatch(new Increment());
    }

    decrement() {
        this.store.dispatch(new Decrement());
    }

    reset() {
        this.store.dispatch(new Reset());
    }
}
