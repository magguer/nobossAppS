import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelgestionComponent } from './panelgestion.component';

describe('PanelgestionComponent', () => {
  let component: PanelgestionComponent;
  let fixture: ComponentFixture<PanelgestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelgestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelgestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
