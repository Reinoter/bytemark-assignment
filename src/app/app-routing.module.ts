import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Project Sites */
import {
    NewsListComponent
} from '@site';

const routes: Routes = [
  {
    path: '',
    component: NewsListComponent
  }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
