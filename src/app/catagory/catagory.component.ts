import { Component, OnInit } from '@angular/core';
import {Category} from '../shared/model/category';
import {Observable} from 'rxjs/Observable';
import {CategoryService} from '../shared/service/category.service';

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
  }

}
