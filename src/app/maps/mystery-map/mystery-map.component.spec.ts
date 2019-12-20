import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysteryMapComponent } from './mystery-map.component';

describe('MysteryMapComponent', () => {
  let component: MysteryMapComponent;
  let fixture: ComponentFixture<MysteryMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysteryMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysteryMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
