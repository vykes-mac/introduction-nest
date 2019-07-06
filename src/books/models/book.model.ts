export class Book {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public author: string,
    public category: string,
    public language: string,
    public ISBN: string,
    public publishDate: string,
  ) {}
}
