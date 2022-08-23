import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-table-header',
  templateUrl: './users-table-header.component.html',
  styleUrls: ['./users-table-header.component.scss']
})
export class UsersTableHeaderComponent implements OnInit {

  private _search: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input()
  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
    this.searchChange.emit(this._search)
  }

  @Output() public searchChange = new EventEmitter();
}
