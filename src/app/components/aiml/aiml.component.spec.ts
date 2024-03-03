import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIMLComponent } from './aiml.component';

describe('AIMLComponent', () => {
  let component: AIMLComponent;
  let fixture: ComponentFixture<AIMLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AIMLComponent]
    });
    fixture = TestBed.createComponent(AIMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
