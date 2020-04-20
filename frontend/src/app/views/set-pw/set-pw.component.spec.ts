import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPwComponent } from './set-pw.component';

describe('SetPwComponent', () => {
  let component: SetPwComponent;
  let fixture: ComponentFixture<SetPwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
