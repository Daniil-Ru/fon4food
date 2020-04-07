import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryBadgeComponent } from './delivery-badge.component';

describe('DeliveryBadgeComponent', () => {
  let component: DeliveryBadgeComponent;
  let fixture: ComponentFixture<DeliveryBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
