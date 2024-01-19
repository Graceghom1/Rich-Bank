import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaitCompteComponent } from './detait-compte.component';

describe('DetaitCompteComponent', () => {
  let component: DetaitCompteComponent;
  let fixture: ComponentFixture<DetaitCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetaitCompteComponent]
    });
    fixture = TestBed.createComponent(DetaitCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
