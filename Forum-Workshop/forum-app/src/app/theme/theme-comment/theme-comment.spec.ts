import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeComment } from './theme-comment';

describe('ThemeComment', () => {
  let component: ThemeComment;
  let fixture: ComponentFixture<ThemeComment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeComment],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeComment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
