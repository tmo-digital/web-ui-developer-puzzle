import { HttpModule, Module } from '@nestjs/common';

import { BooksService } from './books.service';
import { ReadingListService } from './reading-list.service';
import { BooksController } from './books.controller';
import { ReadingListController } from './reading-list.controller';

@Module({
  imports: [HttpModule],
  controllers: [BooksController, ReadingListController],
  providers: [BooksService, ReadingListService],
  exports: [BooksService, ReadingListService]
})
export class ApiBooksModule {}
