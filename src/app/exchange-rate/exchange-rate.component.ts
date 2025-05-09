import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyService } from '../currency.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { PlusIconComponent } from '../plus-icon/plus-icon.component';
import { MinusIconComponent } from '../minus-icon/minus-icon.component';

@Component({
  selector: 'app-exchange-rate',
  imports: [
    CommonModule,
    AsyncPipe,
    DatePipe,
    PlusIconComponent,
    MinusIconComponent,
  ],
  templateUrl: './exchange-rate.component.html',
  styleUrl: './exchange-rate.component.css',
  providers: [DatePipe],
})
export class ExchangeRateComponent {
  private currencyService = inject(CurrencyService);
  isHistoryOpen = false;

  exchangeData$ = this.currencyService.exchangeData$;
  currencyCode$ = this.currencyService.currencyCode$;
  dailyRates$ = this.currencyService.dailyRates$;
  isLoading$ = this.currencyService.isLoading$;

  toggleHistory() {
    this.isHistoryOpen = !this.isHistoryOpen;
  }
}
