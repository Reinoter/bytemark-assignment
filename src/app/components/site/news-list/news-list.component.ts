import { Component, OnInit } from '@angular/core';
import { NewsService, NotifService } from '@services';
import { Router } from '@angular/router';
import { fade } from '@animations';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  animations: [fade]
})
export class NewsListComponent implements OnInit {
  news:any;

  constructor(
    public newsService:NewsService,
    private notif:NotifService,
    private router:Router
  ) { }

  // Initialize news item list every time page is loaded.
  ngOnInit(): void {}

  closeArticle(){
      this.newsService.selected_article = undefined;
  }

  resetPosition(){
    console.log("RESETING POSITION", this.newsService.scroll_position);
    setTimeout(() => {
      if(this.newsService.scroll_position) window.scrollTo(0, this.newsService.scroll_position);
      this.newsService.scroll_position = undefined;
    }, 50);
  }

  selectArticle(article){
      this.newsService.scroll_position = window.pageYOffset;
      this.newsService.selected_article = article;
      this.router.navigate(['article']);
  }
}
