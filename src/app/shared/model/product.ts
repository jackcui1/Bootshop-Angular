import {SubCategory} from './subCategory';
import {Category} from './category';

export class Product {
  constructor(public productid: number,
              public productname: string,
              public brand: string,
              public model: string,
              public sku: string,
              public price: number,
              public dimensions: string,
              public unitInStock: number,
              public availability: number,
              public description: string,
              public imagename: string,
              public category: Category,
              public subCategory: SubCategory,
              public absolutImagename: string) {
  }

}
