import { Component } from '@angular/core';
import { fade } from "@animations";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fade]
})
export class AppComponent {
  title = 'bytemark-assignment';
  _routed_count:number;

  /* Returns router state */
  getRouterOutletState(outlet){
    if(this._routed_count > 1){
      var res = outlet.isActivated ? outlet.activatedRoute : '';
      return res;
    }
    return false
  }

  /* On router navigation */
  onActivate(e, outlet){
    this._routed_count++;
  }

}
