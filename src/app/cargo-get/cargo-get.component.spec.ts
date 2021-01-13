import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoGetComponent } from './cargo-get.component';

describe('CargoGetComponent', () => {
  let component: CargoGetComponent;
  let fixture: ComponentFixture<CargoGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
