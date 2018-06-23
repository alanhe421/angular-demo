import {Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChange, ViewChild} from '@angular/core';
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
export class SocialShareComponent implements OnDestroy, OnChanges {
    @ViewChild('qrcodeModal') qrcodeModal: ModalDirective;
    @ViewChild('qrcode') qrcodeElement: ElementRef;
    private _config: ShareConfig = {title: '', url: ''};
    qrcode: any = null;

    @Input()
    set config(config: ShareConfig) {
        this._config.url = config.url ? config.url : location.href;
        this._config.title = config.title ? config.title : document.title;
    }

    get config() {
        return this._config;
    }

    showQrcode() {
        this.qrcodeModal.show();
        if (this.qrcode) {
            this.qrcode.makeCode(this._config.url); // make another code.
        } else {
            this.qrcode = new QRCode(this.qrcodeElement.nativeElement, {
                text: this._config.url,
                width: 300,
                height: 300,
                colorDark: '#000000',
                colorLight: '#ffffff'
            });
        }
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        console.log(changes);
    }


    ngOnDestroy() {
        if (this.qrcode) {
            this.qrcode.clear(); // clear the code.
        }
    }
}
