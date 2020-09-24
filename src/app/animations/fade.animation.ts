import { trigger, state, animate, transition, style, query } from '@angular/animations';

export const fade =

    trigger('fade', [
        transition( '* => *', [
            query(':enter',
                [
                    style({ opacity: 0 })
                ],
                { optional: true }
            ),

            query(':leave',
                [
                    style({ position: "absolute", opacity: 1, height:"100%" }),
                    animate('.2s', style({ position: "absolute", opacity: 0 }))
                ],
                { optional: true }
            ),

            query(':enter',
                [
                    style({ opacity: 0 }),
                    animate('.2s', style({ opacity: 1 }))
                ],
                { optional: true }
            )

        ])

    ]);
