import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersTableHeaderComponent } from './users-table-header.component';

describe('TableToolsRowComponent', () => {
  let component: UsersTableHeaderComponent;
  let fixture: ComponentFixture<UsersTableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersTableHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
