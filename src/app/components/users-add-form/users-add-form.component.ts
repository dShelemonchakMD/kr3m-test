import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { IUser, User } from "../../models/user.models";

@Component({
  selector: 'app-users-add-form',
  templateUrl: './users-add-form.component.html',
  styleUrls: ['./users-add-form.component.scss']
})
export class UsersAddFormComponent implements OnInit {

  @ViewChild('userForm', {static: false}) newUserForm: NgForm | null = null;
  @ViewChild('formRef', {static: false}) formRef: ElementRef | null = null;

  newUser: IUser = new User();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    this.formRef?.nativeElement?.classList.add('was-validated');
    if (this.newUserForm?.valid) {
    }
  }

  calculateProgress() {
    let lineLength = 0;
    if (!!this.newUserForm && !!this.newUserForm.form) {
      let formFieldsCount = Object.keys(this.newUserForm.form.controls).length || 1;
      let formFieldsValid = Object.keys(this.newUserForm.form.controls).filter(value => this.newUserForm?.form.controls[value].status === 'VALID').length;
      console.log(formFieldsCount, formFieldsValid);
      lineLength = (formFieldsValid / formFieldsCount) * 100;
    }
    return lineLength;
  }

  getTooltip () {
    return 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
  }

}
