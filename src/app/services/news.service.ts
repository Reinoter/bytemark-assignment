import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news:any;
  selected_article:any;
  scroll_position:number;

  constructor(private http:HttpClient, private router:Router) {
    this.getNews("in");
  }

  /* Returns observable based on ISO code*/
  getNews(code){
    var allow_git_host_proxy = "https://cors-anywhere.herokuapp.com/";
    var api_uri = "https://newsapi.org/v2"


    this.http.get<any>(`${allow_git_host_proxy}${api_uri}/top-headlines?country=${code}`)
      .subscribe((result) => {
        this.news = result;
        if(this.selected_article){
          this.router.navigate(['/']);
          this.selected_article = undefined;
        }
      }, (err) => {
        console.error(err);
      })

  }
}
