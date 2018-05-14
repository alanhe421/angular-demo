import {Component, OnInit} from '@angular/core';

import io from 'socket.io-client';
@Component({
    selector: 'app-socket-io',
    templateUrl: './socket-io.component.html',
    styleUrls: ['./socket-io.component.css']
})

export class SocketIoComponent implements OnInit {
    socket = io('http://localhost');

    constructor() {

    }

    ngOnInit() {
        console.log(this.socket);
    }

}
