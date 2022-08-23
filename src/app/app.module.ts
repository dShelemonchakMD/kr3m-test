import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { UsersTableHeaderComponent } from './components/users-table/users-table-header/users-table-header.component';
import { NgbModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UsersAddFormComponent } from './components/users-add-form/users-add-form.component';
import { UsersTableRowComponent } from "./components/users-table/users-table-row/users-table-row.component";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersTableComponent,
    NavbarComponent,
    UsersTableHeaderComponent,
    UsersTableRowComponent,
    UsersAddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
