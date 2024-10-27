import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShpeToolbarComponent } from './shpe-toolbar.component';

describe('ShpeToolbarComponent', () => {
  let component: ShpeToolbarComponent;
  let fixture: ComponentFixture<ShpeToolbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShpeToolbarComponent]
    });
    fixture = TestBed.createComponent(ShpeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
