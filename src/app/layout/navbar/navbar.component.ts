import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private _isToggled = false;

  get isToggled(): boolean {
    return this._isToggled;
  }

  @Input()
  set isToggled(isToggled: boolean) {
    this._isToggled = isToggled;
    this.isToggledChange.emit(this._isToggled);
  }

  @Output() public isToggledChange = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }
}
