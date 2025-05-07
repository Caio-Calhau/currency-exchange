import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getDailyExchangeRate(currencyCode: string): Observable<any> {
    return this.http.get<any>(
      `https://api-brl-exchange.actionlabs.com.br/api/1.0/open/dailyExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=${currencyCode}&to_symbol=BRL`
    );
  }
  getCurrentExchangeRate(currencyCode: string): Observable<any> {
    return this.http.get(
      `https://api-brl-exchange.actionlabs.com.br/api/1.0/open/currentExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=${currencyCode}&to_symbol=BRL`
    );
  }
}
