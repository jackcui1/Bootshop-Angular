import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get('/rest/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get('/rest/products/' + id);
  }

}
