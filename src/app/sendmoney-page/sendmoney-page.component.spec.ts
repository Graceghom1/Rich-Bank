import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendmoneyPageComponent } from './sendmoney-page.component';

describe('SendmoneyPageComponent', () => {
  let component: SendmoneyPageComponent;
  let fixture: ComponentFixture<SendmoneyPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendmoneyPageComponent]
    });
    fixture = TestBed.createComponent(SendmoneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
