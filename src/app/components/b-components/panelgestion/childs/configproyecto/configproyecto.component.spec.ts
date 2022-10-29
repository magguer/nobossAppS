import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigproyectoComponent } from './configproyecto.component';

describe('ConfigproyectoComponent', () => {
  let component: ConfigproyectoComponent;
  let fixture: ComponentFixture<ConfigproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
