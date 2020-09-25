import { Component, OnInit } from '@angular/core';
import { NewsService } from '@services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  code:string;
  get_timeout:any;

  constructor(public newsService:NewsService) { }

  ngOnInit(): void { }


  getNews(){
    clearTimeout(this.get_timeout);
    this.get_timeout = setTimeout(() => {
      if(this.code && this.code != "") this.newsService.getNews(this.code);
    }, 200);
  }




}
