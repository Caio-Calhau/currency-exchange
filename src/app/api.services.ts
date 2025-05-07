import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCurrentExchangeRate(): Observable<any> {
    return this.http.get<any>(
      'https://api-brl-exchange.actionlabs.com.br/api/1.0/open/currentExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=USD&to_symbol=BRL'
    );
  }

  getDailyExchangeRate(): Observable<any> {
    return this.http.get<any>(
      'https://api-brl-exchange.actionlabs.com.br/api/1.0/open/dailyExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=USD&to_symbol=BRL'
    );
  }
}
