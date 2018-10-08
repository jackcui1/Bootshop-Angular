import { Component, OnInit } from '@angular/core';
import {Category} from '../shared/model/category';
import {Observable} from 'rxjs/Observable';
import {CategoryService} from '../shared/service/category.service';
import {ProductService} from '../shared/service/product-service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {

  private categories: Observable<Category[]>;
  private id: number;
  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategoryList();
/*    let id: number = this.routeInfo.snapshot.queryParams['id'];
    console.log('id: ' + id);*/
  }

  goFilter(id: number): void {
    this.router.navigate(['/products', id]);
  }
}
