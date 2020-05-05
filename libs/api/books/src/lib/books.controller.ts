import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query
} from '@nestjs/common';
import { BooksService } from './books.service';

@Controller()
export class BooksController {
  constructor(private readonly books: BooksService) {}

  @Get('/books/search')
  async searchBooks(@Query('q') term) {
    try {
      return await this.books.search(term);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }
}
