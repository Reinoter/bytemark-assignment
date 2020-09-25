import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  auth_token:string;

  constructor(private http:HttpClient) {
    this.auth_token = "04fca36e9b5749c889b93c67adb2c8cf";
  }

  /* Returns observable based on ISO code*/
  getNews(code){
    var allow_git_host_proxy = "https://cors-anywhere.herokuapp.com/";
    var api_uri = "https://newsapi.org/v2"
    return this.http.get<any>(`${allow_git_host_proxy}${api_uri}/top-headlines?country=${code}`);
  }
}
