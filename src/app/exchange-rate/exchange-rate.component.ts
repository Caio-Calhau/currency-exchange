import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from '../currency.service';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-exchange-rate',
  imports: [CommonModule, AsyncPipe, DatePipe],
  templateUrl: './exchange-rate.component.html',
  styleUrl: './exchange-rate.component.css',
  providers: [DatePipe],
})
export class ExchangeRateComponent {
  private currencyService = inject(CurrencyService);

  exchangeData$ = this.currencyService.exchangeData$;
  currencyCode$ = this.currencyService.currencyCode$;
  isLoading$ = this.currencyService.isLoading$;
}
