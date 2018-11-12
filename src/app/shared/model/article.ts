
export class Article {
  constructor(public id: number,
              public title: string,
              public desc: string,
              public body: string,
              public type: number,
              public url: string,
              public imagename: string,
              public createAt: string,
              public updateAt: string,
              public absolutImagename
              ) {
  }
}
