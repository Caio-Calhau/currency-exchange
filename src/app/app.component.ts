import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PrimaryButtonComponent } from './primary-button/primary-button.component';
import { CurrencyInputComponent } from './currency-input/currency-input.component';
import { ExchangeRateComponent } from './exchange-rate/exchange-rate.component';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    HeaderComponent,
    PrimaryButtonComponent,
    CurrencyInputComponent,
    ExchangeRateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'currency-exchange';
}
