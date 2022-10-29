import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilproyectoComponent } from './perfilproyecto.component';

describe('PerfilproyectoComponent', () => {
  let component: PerfilproyectoComponent;
  let fixture: ComponentFixture<PerfilproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
