import { Component } from '@angular/core';
import { ApiService } from '../api.services';
import { CurrencyService } from '../currency.service';
import { DailyExchangeResponse } from '../interfaces/daily-exchange.interface';

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

  getData(currencyCode: string) {
    this.apiService.getCurrentExchangeRate(currencyCode).subscribe({
      next: (response) => {
        this.currencyService.updateCurrentRate(response);
      },
      error: (error) => console.error('Error:', error),
    });

    this.apiService.getDailyExchangeRate(currencyCode).subscribe({
      next: (response) => {
        this.currencyService.updateDailyRates(response);
      },
      error: (error) => console.error('Error:', error),
    });
  }

  submitCurrency() {
    const currencyCode = this.currencyService.getCurrentCurrency();

    if (!currencyCode?.trim()) {
      alert('Por favor, insira uma moeda para a conversão');
      return;
    }

    this.currencyService.setLoading(true);

    this.apiService.getCurrentExchangeRate(currencyCode).subscribe({
      next: (response) => {
        this.currencyService.updateExchangeData({
          rate: response.exchangeRate,
          lastUpdatedAt: new Date().toISOString(),
          fromSymbol: `${currencyCode}/BRL`,
        });
        this.currencyService.setLoading(false);
      },
      error: (error) => {
        console.error('Error:', error);
        this.currencyService.setLoading(false);
      },
    });

    this.apiService.getDailyExchangeRate(currencyCode).subscribe({
      next: (response: DailyExchangeResponse) => {
        if (Array.isArray(response?.data)) {
          this.currencyService.updateDailyRates(response.data);
        } else {
          console.warn('Invalid daily exchange rate response:', response);
        }
      },
      error: (error) => console.error('Error:', error),
    });
  }
}
