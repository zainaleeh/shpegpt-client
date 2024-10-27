import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinBarComponent } from './linkedin-bar.component';

describe('LinkedinBarComponent', () => {
  let component: LinkedinBarComponent;
  let fixture: ComponentFixture<LinkedinBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedinBarComponent]
    });
    fixture = TestBed.createComponent(LinkedinBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
