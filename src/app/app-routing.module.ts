import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/* Project Sites */
import {
    NewsListComponent
} from '@site';

/* Project Inserts */
import {
    NewsItemComponent,
    NotifComponent,
    ArticleComponent
} from '@insert';

const routes: Routes = [
  {
    path: '',
    component: NewsListComponent
  }
];

@NgModule({
    declarations: [
      NewsListComponent,
      NewsItemComponent,
      ArticleComponent,
      NotifComponent
    ],
    imports: [CommonModule, RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
