import {Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChange, ViewChild} from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap';

declare const QRCode: any;

@Component({
    selector: 'app-social-share',
    templateUrl: './social-share.component.html',
    styleUrls: ['./social-share.component.css']
})
export class SocialShareComponent implements OnDestroy, OnChanges {
    @ViewChild('qrcodeModal') qrcodeModal: ModalDirective;
    @ViewChild('qrcode') qrcodeElement: ElementRef;
    private _title = '';
    private _url = '';
    qrcode: any = null;

    @Input()
    set title(title: string) {
        this._title = title ? title : document.title;
    }

    get title() {
        return this._title;
    }

    @Input()
    set url(url: string) {
        this._url = url ? url : location.href;
    }

    get url() {
        return this._url;
    }

    showQrcode() {
        this.qrcodeModal.show();
        if (this.qrcode) {
            this.qrcode.makeCode(this._url); // make another code.
        } else {
            this.qrcode = new QRCode(this.qrcodeElement.nativeElement, {
                text: this._url,
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
