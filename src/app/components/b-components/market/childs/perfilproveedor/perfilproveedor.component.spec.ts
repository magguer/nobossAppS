import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilproveedorComponent } from './perfilproveedor.component';

describe('PerfilproveedorComponent', () => {
  let component: PerfilproveedorComponent;
  let fixture: ComponentFixture<PerfilproveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilproveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilproveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
