import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer} from "@angular/core";
declare let $: any;
/**
 * Created by He on 11/28/16.
 * 滚到到举例底部一定高度，执行某个事件
 */
@Directive({selector: '[myInfiniteScrool]'})
export class InfiniteScrollDirective {
  @Input() infiniteScrollDistance: number = 0;//距离底部距离
  @Output() loadMore = new EventEmitter();

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  //如果距离底部满足这个距离设定，触发事件
  @HostListener('window:scroll', ['$event']) onScroll(): void {

    console.log(`$(document).scrollTop():` + $(document).scrollTop());
    console.log(`$(document).height():` + $(document).height());
    console.log(`$(window).height():` + $(window).height());

    if ($(document).scrollTop() + this.infiniteScrollDistance >= $(document).height() - $(window).height()) {
      this.loadMore.emit();
    }
  };

}
