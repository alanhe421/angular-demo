import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssChildComponent } from './css-child.component';

describe('CssChildComponent', () => {
  let component: CssChildComponent;
  let fixture: ComponentFixture<CssChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
