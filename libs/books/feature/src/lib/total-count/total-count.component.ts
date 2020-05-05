import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTotalUnread } from '@tmo/books/data-access';

@Component({
  selector: 'tmo-total-count',
  templateUrl: './total-count.component.html',
  styleUrls: ['./total-count.component.scss']
})
export class TotalCountComponent implements OnInit {
  totalUnread$ = this.store.select(getTotalUnread);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {}
}
