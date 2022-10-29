import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaventaComponent } from './facturaventa.component';

describe('FacturaventaComponent', () => {
  let component: FacturaventaComponent;
  let fixture: ComponentFixture<FacturaventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaventaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
