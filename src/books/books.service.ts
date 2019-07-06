import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './models/book.model';
import * as bookJson from './models/books.json';

@Injectable()
export class BooksService {
  books: Book[] = bookJson;

  create(book: Book): Book {
    const id = this.books[this.books.length - 1].id + 1;
    const newBook = new Book(
      id,
      book.name,
      book.price,
      book.author,
      book.category,
      book.language,
      book.ISBN,
      book.publishDate,
    );

    this.books.push(newBook);
    return newBook;
  }
  findAll(): Book[] {
    return this.books;
  }

  findOne(id: number): Book {
    return this.findBook(id)[0];
  }

  update(book: Book) {
    const [_, idx] = this.findBook(book.id);
    this.books[idx] = book;
  }

  delete(id: number) {
    const [_, idx] = this.findBook(id);
    this.books.splice(idx, 1);
  }

  private findBook(id: number): [Book, number] {
    const book: Book = this.books.find(bk => bk.id === id);
    const idx = this.books.findIndex(bk => bk.id === id);
    if (!book) {
      throw new NotFoundException('Could not find requested book');
    }
    return [book, idx];
  }
}
