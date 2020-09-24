/* Global imports */
import {
    Component,
    OnInit
} from '@angular/core';

/* Project imports */
// import { Socket } from 'ngx-socket-io';
import { fade, slideDown, list, slideUp } from '@animations';
import { NotificationService } from '@services';


class Notifiction{
    _value: string;
    _render: boolean;

    constructor(value){
        this._render = true;
        this._value = value;
    }
}

@Component({
    selector: 'push-notif',
    templateUrl: './push-notif.component.html',
    styleUrls: ['./push-notif.component.scss'],
    animations: [fade, slideDown, slideUp]
})
export class NotifComponent implements OnInit {
    constructor(public notif: NotificationService){}
    ngOnInit(){}
}
