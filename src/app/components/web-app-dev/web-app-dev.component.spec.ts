import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAppDevComponent } from './web-app-dev.component';

describe('WebAppDevComponent', () => {
  let component: WebAppDevComponent;
  let fixture: ComponentFixture<WebAppDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebAppDevComponent]
    });
    fixture = TestBed.createComponent(WebAppDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
