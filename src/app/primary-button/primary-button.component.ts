import { Component } from '@angular/core';
import { ApiService } from '../api.services';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrl: './primary-button.component.css',
})
export class PrimaryButtonComponent {
  constructor(
    private apiService: ApiService,
    private currencyService: CurrencyService
  ) {}

  submitCurrency() {
    const currencyCode = this.currencyService.getCurrentCurrency();

    if (!currencyCode?.trim()) {
      alert('Por favor, insira uma moeda para a conversão');
      return;
    }

    this.apiService.getCurrentExchangeRate(currencyCode).subscribe({
      next: (response) =>
        console.log('Response from getCurrencyExchangeRate:', response),
      error: (error) => console.error('Error:', error),
    });

    this.apiService.getDailyExchangeRate(currencyCode).subscribe({
      next: (response) =>
        console.log('Response from getDailyExchangeRate:', response),
      error: (error) => console.error('Error:', error),
    });
  }
}
