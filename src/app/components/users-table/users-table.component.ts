import { Component, OnInit } from '@angular/core';
import { IUser } from "../../models/user.models";
import { UsersService } from "../../services/users.service";

type ColumnName = 'firstName' | 'familyName' | 'age' | 'email' | 'monthlyIncome' | 'isMarried' | 'numberOfChildren'

export interface TableColumn {
  label: string,
  fieldName: ColumnName
}

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})

export class UsersTableComponent implements OnInit {

  page: number = 1;
  pageSize: number = 10;

  private _search: string = '';

  tableColumns: TableColumn[] = [
    { label: 'First name', fieldName: 'firstName' },
    { label: 'Family name', fieldName: 'familyName' },
    { label: 'Email', fieldName: 'email' },
    { label: 'Phone number', fieldName: 'age' },
    { label: 'Monthly income', fieldName: 'monthlyIncome' },
    { label: 'Is married', fieldName: 'isMarried' },
    { label: 'Children', fieldName: 'numberOfChildren' }
  ];

  private allUsers: IUser[] = [];
  filteredUsers: IUser[] = [];

  constructor(private _usersService: UsersService) {
  }

  ngOnInit(): void {
    this._usersService.getAllUsers().subscribe(data => {
      this.allUsers = data;
      this.filteredUsers = this.allUsers;
    });
  }

  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
    if ( !!this._search ) {
      this.filteredUsers = this.allUsers.filter(contact => (<ColumnName[]>Object.keys(contact)).some(fieldName =>
        ('' + contact[fieldName]).includes(this._search)
      ));
    } else {
      this.filteredUsers = this.allUsers;
    }
  }

  getPageOfUsers(): IUser[] {
    return this.filteredUsers.slice(((this.page - 1) * this.pageSize), (this.page * this.pageSize));
  }
}
