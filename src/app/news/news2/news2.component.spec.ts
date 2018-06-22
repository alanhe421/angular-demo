import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News2Component } from './news2.component';

describe('News2Component', () => {
  let component: News2Component;
  let fixture: ComponentFixture<News2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
