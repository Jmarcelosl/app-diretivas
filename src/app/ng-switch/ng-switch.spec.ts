import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitch } from './ng-switch';

describe('NgSwitch', () => {
  let component: NgSwitch;
  let fixture: ComponentFixture<NgSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
