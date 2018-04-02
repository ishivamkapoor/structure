import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialYearViewComponent } from './financial-year-view.component';

describe('FinancialYearViewComponent', () => {
  let component: FinancialYearViewComponent;
  let fixture: ComponentFixture<FinancialYearViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialYearViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialYearViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
