import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../shared/service/product-service';
import {Product} from '../shared/model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
    let productId: number = this.routeInfo.snapshot.params['productId'];
    console.log('ProductId: ' + productId);
    this.productService.getProduct(productId).subscribe(
      product => this.product = product
    );
  }

}
