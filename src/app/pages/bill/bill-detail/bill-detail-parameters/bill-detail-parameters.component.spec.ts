import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillDetailParametersComponent } from './bill-detail-parameters.component';

describe('BillDetailParametersComponent', () => {
  let component: BillDetailParametersComponent;
  let fixture: ComponentFixture<BillDetailParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillDetailParametersComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillDetailParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
