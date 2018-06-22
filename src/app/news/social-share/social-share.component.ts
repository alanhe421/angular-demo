import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';

declare const QRCode: any;

export interface ShareConfig {
    url: string;
    title: string;
}

@Component({
    selector: 'app-social-share',
    templateUrl: './social-share.component.html',
    styleUrls: ['./social-share.component.css']
})
export class SocialShareComponent implements OnInit, OnDestroy {
    @ViewChild('qrcodeModal') qrcodeModal: ModalDirective;
    @ViewChild('qrcode') qrcodeElement: ElementRef;
    @Input('config') shareConfig: ShareConfig;
    qrcode: any;

    constructor() {

    }

    ngOnInit() {

    }

    showQrcode() {
        this.qrcodeModal.show();
        if (this.qrcode) {
            this.qrcode.makeCode(this.shareConfig.url); // make another code.
        } else {
            this.qrcode = new QRCode(this.qrcodeElement.nativeElement, {
                text: this.shareConfig.url,
                width: 300,
                height: 300,
                colorDark: '#000000',
                colorLight: '#ffffff'
            });
        }
    }


    goToWeibo() {

    }

    ngOnDestroy() {
        this.qrcode.clear(); // clear the code.
    }
}
