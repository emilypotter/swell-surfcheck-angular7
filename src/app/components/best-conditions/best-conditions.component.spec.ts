import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestConditionsComponent } from './best-conditions.component';

describe('BestConditionsComponent', () => {
  let component: BestConditionsComponent;
  let fixture: ComponentFixture<BestConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
