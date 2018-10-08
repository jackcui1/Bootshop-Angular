import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Product} from '../shared/model/product';
import {ProductService} from '../shared/service/product-service';
import {ActivatedRoute, Params, ParamMap, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private products: Observable<Product[]>;
  private subCategoryId: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
      this.products = this.productService.getProductList();
      this.subCategoryId = this.route.snapshot.params['id'];
      console.log('this.subCategoryId: ' + this.subCategoryId);
      this.route.params.subscribe((params: Params) => {
        console.log(params['id']);
        this.products = this.productService.getProductsBySubCategory(params['id']);
      });
  }
}

