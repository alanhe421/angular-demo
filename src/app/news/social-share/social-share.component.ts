import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';

declare const QRCode: any;

@Component({
    selector: 'app-social-share',
    templateUrl: './social-share.component.html',
    styleUrls: ['./social-share.component.css']
})
export class SocialShareComponent implements OnInit, OnDestroy {
    @ViewChild('qrcodeModal') qrcodeModal: ModalDirective;
    @ViewChild('qrcode') qrcodeElement: ElementRef;
    @Input('link') shareLink: string;
    qrcode: any;

    constructor() {
        if (!this.shareLink) {
            this.shareLink = location.href;
        }
    }

    ngOnInit() {

    }

    showQrcode() {
        this.qrcodeModal.show();
        if (this.qrcode) {
            this.qrcode.makeCode(this.shareLink); // make another code.
        } else {
            this.qrcode = new QRCode(this.qrcodeElement.nativeElement, {
                text: this.shareLink,
                width: 300,
                height: 300,
                colorDark: '#000000',
                colorLight: '#ffffff'
            });
        }
    }

    ngOnDestroy() {
        this.qrcode.clear(); // clear the code.
    }
}
