import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'velaio-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private _isMenuVisible: boolean = false;
  public get isMenuVisible(): boolean {
    return this._isMenuVisible;
  }

  protected toogleMenu(): void {
    this._isMenuVisible = !this._isMenuVisible;
  }
}
