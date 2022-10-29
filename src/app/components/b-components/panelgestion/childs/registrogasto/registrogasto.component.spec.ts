import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrogastoComponent } from './registrogasto.component';

describe('RegistrogastoComponent', () => {
  let component: RegistrogastoComponent;
  let fixture: ComponentFixture<RegistrogastoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrogastoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrogastoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
