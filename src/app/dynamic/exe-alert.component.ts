import {Component, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';

@Component({
    selector: 'exe-alert',
    template: `
        <h1 (click)="output.next(type)">Alert {{type}}</h1>
    `,
})
export class AlertComponent {
    @Input() type = 'success';
    @Output() output = new EventEmitter();
    ngOnInit() {

    }
}