import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footable1Component } from './footable1.component';

describe('Footable1Component', () => {
  let component: Footable1Component;
  let fixture: ComponentFixture<Footable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
