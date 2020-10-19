import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  getReadingList,
  removeFromReadingList,
  addToReadingList,
  confirmedAddToReadingList,
} from '@tmo/books/data-access';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Book, ReadingListItem } from '@tmo/shared/models';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss'],
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  undoLastItem: Book;

  constructor(private readonly store: Store, private _snackBar: MatSnackBar) {}

  removeFromReadingList(item) {
    this.undoLastItem = { ...item };
    this.store.dispatch(removeFromReadingList({ item }));
    this._snackBar.open('Book Removed succesfully', null, {
      duration: 2000,
    });
  }
  undoLastOperation(book: Book) {
    this.store.dispatch(addToReadingList({ book }));
    this._snackBar.open('Undo operation Success', null, {
      duration: 2000,
    });
    this.undoLastItem = undefined;
  }
}
