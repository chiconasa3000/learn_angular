import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsWithSignals } from './forms-with-signals';

describe('FormsWithSignals', () => {
  let component: FormsWithSignals;
  let fixture: ComponentFixture<FormsWithSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsWithSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsWithSignals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
