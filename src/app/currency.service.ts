import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ExchangeData } from './interfaces/exchange-data.interface';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private currencyCodeSubject = new BehaviorSubject<string>('');
  private currentRate = new BehaviorSubject(null);
  private dailyRates = new BehaviorSubject(null);
  private exchangeData = new BehaviorSubject<ExchangeData | null>(null);
  private isLoading = new BehaviorSubject<boolean>(false);
  public currencyCode$ = this.currencyCodeSubject.asObservable();

  currentRate$ = this.currentRate.asObservable();
  dailyRates$ = this.dailyRates.asObservable();
  exchangeData$ = this.exchangeData.asObservable();
  isLoading$ = this.isLoading.asObservable();

  updateCurrentRate(data: any) {
    this.currentRate.next(data);
  }

  updateDailyRates(data: any) {
    this.dailyRates.next(data);
  }

  updateExchangeData(data: ExchangeData) {
    this.exchangeData.next(data);
  }

  getCurrentCurrency(): string {
    return this.currencyCodeSubject.value;
  }

  setCurrencyCode(code: string) {
    this.currencyCodeSubject.next(code.toUpperCase());
  }

  setLoading(state: boolean) {
    this.isLoading.next(state);
  }
}
