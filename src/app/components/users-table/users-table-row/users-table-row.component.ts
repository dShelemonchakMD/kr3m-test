import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from "../users-table.component";
import { IUser } from "../../../models/user.models";

@Component({
  selector: '[app-users-table-row]',
  templateUrl: './users-table-row.component.html',
  styleUrls: ['./users-table-row.component.scss']
})
export class UsersTableRowComponent implements OnInit {

  @Input()
  tableColumns: TableColumn[] = [];

  @Input()
  user: IUser | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
