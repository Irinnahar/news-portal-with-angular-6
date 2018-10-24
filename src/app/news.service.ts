import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  apiKey = '9415f6520b224adfae4852b54394ba69'

  getNewsSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey=' + this.apiKey)
  }
  getArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' + this.apiKey)
  }
}
