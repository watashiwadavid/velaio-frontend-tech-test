import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutRepository } from '../../state';

@Component({
  selector: 'velaio-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  protected baseLayoutRepository = inject(BaseLayoutRepository);
  protected isMenuOpened$ = this.baseLayoutRepository.isMenuVisible$;
  protected menuItems$ = this.baseLayoutRepository.menuItems$;

  protected toogleMenu(): void {
    this.baseLayoutRepository.toogleIsMenuVisible();
  }
}
