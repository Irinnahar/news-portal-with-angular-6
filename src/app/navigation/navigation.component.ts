import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

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

  searchArticles(source){
    console.log("selected source is: "+source);
    this.news.getArticlesByID(source).subscribe(news => this.articles = news['articles']);
  }
}
