import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelnoboxComponent } from './panelnobox.component';

describe('PanelnoboxComponent', () => {
  let component: PanelnoboxComponent;
  let fixture: ComponentFixture<PanelnoboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelnoboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelnoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
