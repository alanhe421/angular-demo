import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssSubChildComponent } from './css-sub-child.component';

describe('CssSubChildComponent', () => {
  let component: CssSubChildComponent;
  let fixture: ComponentFixture<CssSubChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssSubChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssSubChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
