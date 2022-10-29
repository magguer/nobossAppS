import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusproyectosComponent } from './tusproyectos.component';

describe('TusproyectosComponent', () => {
  let component: TusproyectosComponent;
  let fixture: ComponentFixture<TusproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TusproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
