import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-input',
  imports: [FormsModule],
  templateUrl: './currency-input.component.html',
  styleUrl: './currency-input.component.css',
})
export class CurrencyInputComponent {
  inputCurrency = '';

  constructor(private currencyService: CurrencyService) {}

  updateCurrency() {
    this.currencyService.setCurrencyCode(this.inputCurrency);
  }
}
