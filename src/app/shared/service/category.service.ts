import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Category} from '../model/category';

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<Category[]> {

    console.log(this.http.get('/rest/categories'));
    return this.http.get('/rest/categories');
  }

}
