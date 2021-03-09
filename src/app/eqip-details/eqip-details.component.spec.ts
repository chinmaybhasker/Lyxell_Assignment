import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EqipDetailsComponent } from './eqip-details.component';

describe('EqipDetailsComponent', () => {
  let component: EqipDetailsComponent;
  let fixture: ComponentFixture<EqipDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EqipDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EqipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
