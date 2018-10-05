import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../shared/model/product';
import {ProductService} from '../shared/service/product-service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private products: Observable<Product[]>;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProductList();
    this.productService.getProductList().subscribe(res => console.log(res));
  }

}

