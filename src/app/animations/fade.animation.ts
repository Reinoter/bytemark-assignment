import { trigger, state, animate, transition, style, query, group } from '@angular/animations';

export const fade =

    trigger('fade', [
            state('in', style({height: '*', opacity: 0})),
            transition(':leave', [
                style({opacity: 1}),

                group([
                    animate('100ms ease-in-out', style({'opacity': '0'}))
                ])

            ]),
            transition(':enter', [
                style({opacity: 0}),

                group([
                    animate('200ms ease-in-out', style({'opacity': '1'}))
                ])

            ])
        ]);
