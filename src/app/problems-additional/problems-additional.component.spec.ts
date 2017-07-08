import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsAdditionalComponent } from './problems-additional.component';

describe('ProblemsAdditionalComponent', () => {
  let component: ProblemsAdditionalComponent;
  let fixture: ComponentFixture<ProblemsAdditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsAdditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsAdditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
