import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BddPagesComponent } from './bdd-pages.component';

describe('BddPagesComponent', () => {
  let component: BddPagesComponent;
  let fixture: ComponentFixture<BddPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BddPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BddPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
