import { Component, OnInit } from '@angular/core';
import { NewsService, NotifService } from '@services';
import { fade } from '@animations';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
  animations: [fade]
})
export class NewsListComponent implements OnInit {
  news:any;
  selected_article:any;
  scroll_position:number;

  constructor(
    private newsService:NewsService,
    private notif:NotifService
  ) { }

  // Initialize news item list every time page is loaded.
  ngOnInit(): void {
    this.newsService.getNews('IN').subscribe((result) => {
      this.news = result;
    }, (err) => {
      this.notif.add("Error", err);
    })
  }

  closeArticle(){
      this.selected_article = undefined;
  }

  resetPosition(){
      if(this.scroll_position) window.scrollTo(0, this.scroll_position);
      this.scroll_position = undefined;
  }

  selectArticle(article){
      this.scroll_position = window.pageYOffset;
      this.selected_article = article;
  }
}
