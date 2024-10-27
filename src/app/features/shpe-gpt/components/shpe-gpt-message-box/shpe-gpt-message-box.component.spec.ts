import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShpeGptMessageBoxComponent } from './shpe-gpt-message-box.component';

describe('ShpeGptMessageBoxComponent', () => {
  let component: ShpeGptMessageBoxComponent;
  let fixture: ComponentFixture<ShpeGptMessageBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShpeGptMessageBoxComponent]
    });
    fixture = TestBed.createComponent(ShpeGptMessageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
