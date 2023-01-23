import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffusionsComponent } from './diffusions.component';

describe('DiffusionsComponent', () => {
  let component: DiffusionsComponent;
  let fixture: ComponentFixture<DiffusionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffusionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
