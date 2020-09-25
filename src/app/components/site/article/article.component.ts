import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '@services';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  constructor(
    public newsService:NewsService,
    private router:Router
  ) {}

  ngOnInit(): void {
      console.log(this.newsService.selected_article);
      window.scrollTo(0, 0);
  }

  closeArticle(){
      this.router.navigate(['/'])
      this.newsService.selected_article = undefined;
  }

  formatDate(date:string){
      return new Date(date).toLocaleString();
  }
}
