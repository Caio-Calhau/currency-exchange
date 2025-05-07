import { Component } from '@angular/core';
import { ActionLabsLogoComponent } from '../action-labs-logo/action-labs-logo.component';

@Component({
  selector: 'app-header',
  imports: [ActionLabsLogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
