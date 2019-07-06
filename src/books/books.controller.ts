import { BooksService } from './books.service';
import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { Book } from './models/book.model';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): Book[] {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Book {
    return this.booksService.findOne(+id);
  }

  @Post('create')
  create(@Body() book: Book): Book {
    return this.booksService.create(book);
  }

  @Put('update')
  update(@Body() book: Book) {
    this.booksService.update(book);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.booksService.delete(+id);
  }
}
