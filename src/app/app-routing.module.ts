import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersTableComponent} from "./components/users-table/users-table.component";
import {UsersAddFormComponent} from "./components/users-add-form/users-add-form.component";

const routes: Routes = [
  {
    path: '',
    component: UsersTableComponent
  },
  {
    path: 'add',
    component: UsersAddFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
