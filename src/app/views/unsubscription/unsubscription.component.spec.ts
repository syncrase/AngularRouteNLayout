import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscriptionComponent } from './unsubscription.component';

describe('UnsubscriptionComponent', () => {
  let component: UnsubscriptionComponent;
  let fixture: ComponentFixture<UnsubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
