import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sources: Array <any>;
  articles: Array <any>;
  constructor(private news: NewsService) { }

  ngOnInit() {

    this.news.getNewsSources().subscribe(
      news => this.sources = news['sources']
    )
    this.news.getArticles().subscribe(
      news => this.articles = news['articles']
    )
  }

}
