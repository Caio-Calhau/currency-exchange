import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCurrencyCodeComponent } from './input-currency-code.component';

describe('InputCurrencyCodeComponent', () => {
  let component: InputCurrencyCodeComponent;
  let fixture: ComponentFixture<InputCurrencyCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCurrencyCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCurrencyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
