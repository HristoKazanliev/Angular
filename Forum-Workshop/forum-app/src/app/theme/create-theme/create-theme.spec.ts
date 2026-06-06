import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTheme } from './create-theme';

describe('CreateTheme', () => {
  let component: CreateTheme;
  let fixture: ComponentFixture<CreateTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTheme],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTheme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
