import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposdedescuentoComponent } from './gruposdedescuento.component';

describe('GruposdedescuentoComponent', () => {
  let component: GruposdedescuentoComponent;
  let fixture: ComponentFixture<GruposdedescuentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposdedescuentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruposdedescuentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
