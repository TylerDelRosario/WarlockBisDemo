import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BisPage } from './bis-page';

describe('BisPage', () => {
  let component: BisPage;
  let fixture: ComponentFixture<BisPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BisPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
