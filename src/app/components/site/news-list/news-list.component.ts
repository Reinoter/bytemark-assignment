import { Component, OnInit } from '@angular/core';
import { NewsService, NotifService } from '@services';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  news:any;

  constructor(
    private newsService:NewsService,
    private notif:NotifService
  ) { }

  ngOnInit(): void {
    this.newsService.getNews('IN').subscribe((result) => {
      console.log("Got result", result.articles);
    }, (err) => {
      console.error("Got error ", err);
      this.notif.add("Error", err);
    })

  }

}
