import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionEquationComponent } from './conversion-equation.component';

describe('ConversionEquationComponent', () => {
  let component: ConversionEquationComponent;
  let fixture: ComponentFixture<ConversionEquationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversionEquationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionEquationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
