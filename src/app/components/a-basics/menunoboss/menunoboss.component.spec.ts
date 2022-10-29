import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenunobossComponent } from './menunoboss.component';

describe('MenunobossComponent', () => {
  let component: MenunobossComponent;
  let fixture: ComponentFixture<MenunobossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenunobossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenunobossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
