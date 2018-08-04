import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private productId: number;
  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    this.productId = this.routeInfo.snapshot.params['productId'];
  }

}
