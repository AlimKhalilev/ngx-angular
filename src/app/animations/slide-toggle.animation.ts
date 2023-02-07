import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideToggleAnimation = trigger('slideToggle', [
    state('0', style({ height: '0px' })),
    state('1', style({ height: '*' })),
    transition('* <=> *', animate('400ms ease-in-out'))
]);