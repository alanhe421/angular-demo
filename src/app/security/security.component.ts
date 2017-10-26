import {Component, OnInit} from "@angular/core";

const HTML_TEST = `<em class="highlight">hhwhqhwq</em>
`;
@Component({
    selector: 'app-security',
    templateUrl: './security.component.html',
    styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

    sourcecode: string;

    constructor() {
    }

    ngOnInit() {
        this.sourcecode = HTML_TEST;
        // this.sanitizer.sanitize(SecurityContext.HTML, HTML_TEST)
        // this.sourcecode = this.sanitizer.sanitize(SecurityContext.SCRIPT, HTML_TEST);
        // this.sourcecode = this.sanitizer.bypassSecurityTrustScript(HTML_TEST);
    }

}

