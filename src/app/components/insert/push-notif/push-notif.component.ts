/* Global imports */
import {
    Component,
    OnInit
} from '@angular/core';

/* Project imports */
import { NotifService } from '@services';

@Component({
    selector: 'push-notif',
    templateUrl: './push-notif.component.html',
    styleUrls: ['./push-notif.component.scss']
})

export class NotifComponent implements OnInit {
    constructor(public notif: NotifService){}
    ngOnInit(){}
}
