import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDetailHeaderComponent } from './bill-detail-header.component';

describe('BillDetailHeaderComponent', () => {
  let component: BillDetailHeaderComponent;
  let fixture: ComponentFixture<BillDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillDetailHeaderComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
