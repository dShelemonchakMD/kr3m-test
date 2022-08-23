import { Injectable } from '@angular/core';
import { IUser } from "../models/user.models";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: IUser[] = [];

  constructor(public httpClient: HttpClient) {
    this.getAllUsers().subscribe(data => this.users = data);
  }

  public getAllUsers(): Observable<IUser[]> {
    if (this.users.length > 0) {
      return of(this.users);
    }

    return this.httpClient.get<IUser[]>('/assets/users.json').pipe(map(data => {
      this.users = data;
      return this.users;
    }));
  }

  public addContact(contact: IUser) {
    this.users.push(contact);
  }
}
