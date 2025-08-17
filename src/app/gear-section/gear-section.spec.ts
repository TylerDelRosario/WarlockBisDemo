import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearSection } from './gear-section';

describe('GearSection', () => {
  let component: GearSection;
  let fixture: ComponentFixture<GearSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GearSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
