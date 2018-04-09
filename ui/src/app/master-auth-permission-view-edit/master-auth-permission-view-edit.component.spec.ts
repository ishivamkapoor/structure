import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterAuthPermissionViewEditComponent } from './master-auth-permission-view-edit.component';

describe('MasterAuthPermissionViewEditComponent', () => {
  let component: MasterAuthPermissionViewEditComponent;
  let fixture: ComponentFixture<MasterAuthPermissionViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterAuthPermissionViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterAuthPermissionViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
