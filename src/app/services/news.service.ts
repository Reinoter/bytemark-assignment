import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private _auth_token:string;

  get auth_token(){
    return this._auth_token;
  }

  constructor(private http:HttpClient) {
    this._auth_token = "04fca36e9b5749c889b93c67adb2c8cf";
  }

  /* Returns observable based on ISO code*/
  getNews(code){
    return this.http.get(`https://newsapi.org/v2/everything?country=${code}`)
  }
}
