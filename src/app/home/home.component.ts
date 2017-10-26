import {Component, OnInit} from "@angular/core";
import {Modal} from "./modal/modal";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    modal: Modal = new Modal();

    htmlSnippet = `<em class="highlight">hhwhqhwq</em>`;

    constructor() {
    }

    ngOnInit() {
    }

}
