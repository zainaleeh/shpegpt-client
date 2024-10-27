import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShpeGptInputBoxComponent } from './shpe-gpt-input-box.component';

describe('ShpeGptInputBoxComponent', () => {
  let component: ShpeGptInputBoxComponent;
  let fixture: ComponentFixture<ShpeGptInputBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShpeGptInputBoxComponent]
    });
    fixture = TestBed.createComponent(ShpeGptInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
