import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsplumbComponent } from './jsplumb.component';

describe('JsplumbComponent', () => {
  let component: JsplumbComponent;
  let fixture: ComponentFixture<JsplumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsplumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsplumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
