import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private products: Array<Product>;
  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, 'First product.', 1.99, 3.5, 'This is first product that is the first in my lesson.', ['eletrinic product', 'computer', 'mobile phone']),
      new Product(2, 'Second product.', 2.99, 2.5, 'This is second product that is the first in my lesson.', ['eletrinic product', 'computer', 'mobile phone']),
      new Product(3, 'Third product.', 3.99, 4.5, 'This is third product that is the first in my lesson.', ['eletrinic product', 'computer', 'mobile phone']),
      new Product(4, 'Fourth product.', 4.99, 2.5, 'This is fourth product that is the first in my lesson.', ['eletrinic product', 'computer', 'mobile phone']),
      new Product(5, 'Fifth product.', 5.99, 1.5, 'This is fifth product that is the first in my lesson.', ['eletrinic product', 'computer', 'mobile phone']),
      new Product(6, 'Sixth product.', 6.99, 4.5, 'This is sixth product that is the first in my lesson.', ['eletrinic product', 'computer', 'mobile phone'])
    ];
  }

}
/*定义一个产品类*/
export class Product {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {
  }
}
