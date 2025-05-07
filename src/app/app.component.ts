import { Component } from '@angular/core';
import { ActionLabsLogoComponent } from './action-labs-logo/action-labs-logo.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ActionLabsLogoComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'currency-exchange';

  currencyCode = '';

  submitCurrency() {
    if (!this.currencyCode.trim()) {
      alert('Currency must be selected');
      return;
    }
    console.log('sending currency code: ', this.currencyCode);
  }
}
