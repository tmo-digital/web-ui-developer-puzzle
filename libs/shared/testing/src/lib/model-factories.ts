import { Book, ReadingListItem } from '@tmo/shared/models';

export function createBook(id: string): Book {
  return {
    id,
    title: `Book ${id}`,
    description: '',
    authors: [`Author ${id}`],
    coverUrl: '',
    publishedDate: new Date(2020, 0, 1).toISOString()
  };
}

export function createReadingListItem(bookId: string): ReadingListItem {
  return {
    bookId,
    title: `Book ${bookId}`,
    description: '',
    authors: [`Author ${bookId}`],
    coverUrl: '',
    publishedDate: new Date(2020, 0, 1).toISOString()
  };
}
