import {Article} from './Article';

export class Contact {
  constructor(public id: number,
              public firstname: string,
              public lastname: string,
              public email: string,
              public message: string,
              public article: Article
  ) {
  }
}
