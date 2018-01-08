import {Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {AlertComponent} from './exe-alert.component';

@Component({
    selector: 'app-dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
    componentRef: ComponentRef<AlertComponent>;

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
        this.componentRef.instance.type = type;
        this.componentRef.instance.output.subscribe((msg: string) => console.log(msg));
    }

    ngOnDestroy() {
        this.componentRef.destroy();
    }
}
