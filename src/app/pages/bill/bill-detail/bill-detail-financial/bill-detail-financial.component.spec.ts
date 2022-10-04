import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDetailFinancialComponent } from './bill-detail-financial.component';

describe('BillDetailFinancialComponent', () => {
  let component: BillDetailFinancialComponent;
  let fixture: ComponentFixture<BillDetailFinancialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillDetailFinancialComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDetailFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
