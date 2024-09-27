import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent, HeaderComponent } from './components';
import { BaseLayoutRepository } from './state';

@Component({
  selector: 'velaio-base-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, HeaderComponent],
  templateUrl: './base-layout.component.html',
})
export class BaseLayoutComponent implements OnInit {
  protected baseLayoutRepository = inject(BaseLayoutRepository);

  ngOnInit(): void {
    this.baseLayoutRepository.menuItems = [
      { id: 1, name: 'Tareas', path: '/tasks' },
    ];
  }
}
