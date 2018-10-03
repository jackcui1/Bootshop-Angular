import { Component, OnInit } from '@angular/core';
import {Category} from '../shared/category';
import {Observable} from 'rxjs/Observable';
import {CategoryService} from '../shared/category.service';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {

  private categories: Observable<Category[]>;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategoryList();
    this.categories.subscribe( res => console.log(res));
  }

}
