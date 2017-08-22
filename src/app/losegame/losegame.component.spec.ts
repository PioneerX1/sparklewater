import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LosegameComponent } from './losegame.component';

describe('LosegameComponent', () => {
  let component: LosegameComponent;
  let fixture: ComponentFixture<LosegameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosegameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LosegameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
