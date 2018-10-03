import {SubCategory} from './subCategory';

export class Category {
  constructor(public id: number,
              public name: string,
              public description: string,
              public subCategories: SubCategory[]) {
  }
}
