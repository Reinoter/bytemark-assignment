import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/* Project Sites */
import {
    NewsListComponent,
    ArticleComponent
} from '@site';


const routes: Routes = [
  {
    path: '',
    component: NewsListComponent
  },
  {
    path: 'article',
    component: ArticleComponent
  }
];

@NgModule({
    imports: [CommonModule, RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
