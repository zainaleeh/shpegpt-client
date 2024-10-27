import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShpeGPTPageComponent } from './shpe-gpt-page.component';

describe('ShpeGPTPageComponent', () => {
  let component: ShpeGPTPageComponent;
  let fixture: ComponentFixture<ShpeGPTPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShpeGPTPageComponent]
    });
    fixture = TestBed.createComponent(ShpeGPTPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
