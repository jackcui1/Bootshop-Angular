import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../shared/service/article.service';
import {Article} from '../shared/model/article';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private articles: Observable<Article[]>;
  private ArticleId: string = '1';
  constructor(private articleService: ArticleService) { }

  ngOnInit() {

    this.articles = this.articleService.getArticles(this.ArticleId);
    console.log(this.articles);
  }

}
