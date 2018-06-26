import {animate, style, transition, trigger} from '@angular/animations';

/**
 * Created by He on 16/11/17.
 * fade-in 动画
 */
export const fadeIn = trigger('fadeIn', [
  transition('void => *', [
    style({opacity: 0}),
    animate(600, style({opacity: 1}))
  ]),
  transition('* => void', [
    animate(600, style({opacity: 0}))
  ])
]);
