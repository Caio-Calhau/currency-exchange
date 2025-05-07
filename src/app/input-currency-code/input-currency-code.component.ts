import { TypeofExpression } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-currency-code',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-currency-code.component.html',
  styleUrl: './input-currency-code.component.css',
})
export class InputCurrencyCodeComponent {
  currencyCode = '';

  submitCurrency() {
    if (!this.currencyCode.trim()) {
      alert('Currency must be selected');
      return;
    }
    console.log('sending currency code: ', this.currencyCode);
  }
}
