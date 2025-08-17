import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GearTable } from './gear-table';

describe('GearTable', () => {
  let component: GearTable;
  let fixture: ComponentFixture<GearTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GearTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GearTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
