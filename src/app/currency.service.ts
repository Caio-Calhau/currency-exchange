import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CurrencyService {
  private currencyCodeSubject = new BehaviorSubject<string>('');
  public currencyCode$ = this.currencyCodeSubject.asObservable();

  getCurrentCurrency(): string {
    return this.currencyCodeSubject.value;
  }

  setCurrencyCode(code: string) {
    this.currencyCodeSubject.next(code);
  }
}
