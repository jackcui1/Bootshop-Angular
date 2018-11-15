import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../model/article';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticle(id: string): Observable<Article> {
    return this.http.get('/rest/articles/' + id);
  }

  getArticles(id: string): Observable<Article[]> {
    return this.http.get('/rest/articles/images/' + id);
  }
}
