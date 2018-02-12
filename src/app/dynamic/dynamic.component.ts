import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AlertComponent} from './exe-alert.component';

@Component({
    selector: 'app-dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
    componentRef: ComponentRef<AlertComponent>;
    html = `321312312<a href="/css" target="_blank">查看更多</a>`;
    @ViewChild('alertContainer', {read: ViewContainerRef}) container: ViewContainerRef;

    constructor(private resolver: ComponentFactoryResolver) {
    }

    ngOnInit() {

    }

    createComponent(type: string) {
        this.container.clear();
        const factory: ComponentFactory<AlertComponent> =
            this.resolver.resolveComponentFactory(AlertComponent);
        this.componentRef = this.container.createComponent(factory);
        console.log(this.componentRef.hostView.toString());
        this.componentRef.instance.type = type;
        this.componentRef.instance.output.subscribe((msg: string) => console.log(msg));
    }

    ngOnDestroy() {
        this.componentRef.destroy();
    }

    updateTpl() {
        let aLink = document.createElement('a');
        aLink.setAttribute('value', '下载');
    }

    showPopover(event: Event) {
        event.preventDefault();
    }


}
