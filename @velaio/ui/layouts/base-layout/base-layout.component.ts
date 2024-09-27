import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent, HeaderComponent } from './components';

@Component({
  selector: 'velaio-base-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, HeaderComponent],
  templateUrl: './base-layout.component.html',
})
export class BaseLayoutComponent {}
