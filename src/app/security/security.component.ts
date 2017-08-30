import {Component, OnInit, SecurityContext} from "@angular/core";
import {DomSanitizer} from "@angular/platform-browser";

const HTML_TEST = `

<html>
<head>

</head>
<body>
<h1 style="color: red">
hello world
</h1>
<!--<script>-->
<!--alert('hello world');-->
<!--</script>-->
</body>
</html>
`;
@Component({
    selector: 'app-security',
    templateUrl: './security.component.html',
    styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

    sourcecode;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit() {
        this.sourcecode = this.sanitizer.bypassSecurityTrustHtml(HTML_TEST);
        // this.sourcecode = this.sanitizer.sanitize(SecurityContext.SCRIPT, HTML_TEST);
        // this.sourcecode = this.sanitizer.bypassSecurityTrustScript(HTML_TEST);
    }

}

