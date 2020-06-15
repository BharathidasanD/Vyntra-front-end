import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomershoppingComponent } from './customershopping.component';

describe('CustomershoppingComponent', () => {
  let component: CustomershoppingComponent;
  let fixture: ComponentFixture<CustomershoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomershoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomershoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
