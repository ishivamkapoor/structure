import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialYearAddEditComponent } from './financial-year-add-edit.component';

describe('FinancialYearAddEditComponent', () => {
  let component: FinancialYearAddEditComponent;
  let fixture: ComponentFixture<FinancialYearAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialYearAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialYearAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
