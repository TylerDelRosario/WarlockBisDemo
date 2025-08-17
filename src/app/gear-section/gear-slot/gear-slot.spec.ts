import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearSlot } from './gear-slot';

describe('GearSlot', () => {
  let component: GearSlot;
  let fixture: ComponentFixture<GearSlot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearSlot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GearSlot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
