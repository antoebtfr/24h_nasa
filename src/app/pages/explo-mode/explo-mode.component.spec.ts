import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploModeComponent } from './explo-mode.component';

describe('ExploModeComponent', () => {
  let component: ExploModeComponent;
  let fixture: ComponentFixture<ExploModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
