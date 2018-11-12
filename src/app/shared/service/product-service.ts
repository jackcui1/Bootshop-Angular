import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ProductService {
  searchBySubCategoryIdEvent: EventEmitter<number> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get('/rest/products');
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get('/rest/products/' + id);
  }

  getProductsBySubCategory(id: number): Observable<Product[]> {
    return this.http.get('/rest/products/subcategories/' + id);
  }
}

export class IdClass {
  constructor(private id: string) {
  }

}
