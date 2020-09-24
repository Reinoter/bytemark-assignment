/* External imports */
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

class Notifiction{
    _value: string;
    _render: boolean;
    _type:string;

    constructor(type, value){
        this._render = true;
        this._value = value;
        this._type = type;
    }
}

@Injectable({
    providedIn: 'root'
})
/* Service to handle user data */
export class NotifService {
    _notifications:Notifiction[];

    constructor(
        // private socket:Socket
    ) {
        this._notifications = [];
    }

    remove(notif){
        var idx = this._notifications.indexOf(notif);
        if(idx != -1){
            notif._render = false;
            setTimeout(() => {
                this._notifications.splice(idx, 1);
            }, 200);
        }
    }

    add(type:string, input:string):void{
        this._notifications.unshift(new Notifiction(type, input))
    }

    renderNotifs(){
        return this._notifications.reduce((total, object) => {
           return total + (object._render?1:0)
       }, 0)
    }
}
