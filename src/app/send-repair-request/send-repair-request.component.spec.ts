import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendRepairRequestComponent } from './send-repair-request.component';

describe('SendRepairRequestComponent', () => {
  let component: SendRepairRequestComponent;
  let fixture: ComponentFixture<SendRepairRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendRepairRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendRepairRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
