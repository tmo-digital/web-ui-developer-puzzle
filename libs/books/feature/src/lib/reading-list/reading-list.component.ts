import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, addToReadingList, updateReadingList } from '@tmo/books/data-access';
import { ReadingListItem, Book } from '@tmo/shared/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  lastRemoved:Book;
  constructor(private readonly store: Store,private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    const snackBarRef = this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: 'left'
    });
    snackBarRef.onAction().subscribe(() => {
      this.store.dispatch(addToReadingList({ book: this.lastRemoved }));
    });
  }

  markBookAsFinished(item: ReadingListItem) {
    this.store.dispatch(updateReadingList({ item }));
  }

  removeFromReadingList(item: ReadingListItem) {
    this.lastRemoved = {...item,id:item.bookId} ;
    this.store.dispatch(removeFromReadingList({ item }));
    this.openSnackBar('Book Removed from the list','Undo');
  }
}
