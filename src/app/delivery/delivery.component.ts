import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../shared/service/article.service';
import {Article} from '../shared/model/article';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  private article: Article;
  articleId: string = '2';
  constructor(private articleService: ArticleService) { }

  ngOnInit() {

    this.articleService.getArticle(this.articleId).subscribe(
      article => this.article = article
    );
  }

}
