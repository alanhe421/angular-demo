import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplyScrollComponent } from './simply-scroll.component';

describe('SimplyScrollComponent', () => {
  let component: SimplyScrollComponent;
  let fixture: ComponentFixture<SimplyScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplyScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplyScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
