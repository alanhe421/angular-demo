import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SasstestComponent } from './sasstest.component';

describe('SasstestComponent', () => {
  let component: SasstestComponent;
  let fixture: ComponentFixture<SasstestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SasstestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SasstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
