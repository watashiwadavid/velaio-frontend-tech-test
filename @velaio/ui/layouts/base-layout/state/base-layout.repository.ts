import { Injectable } from '@angular/core';
import { store } from './base-layout.store';
import { select, setProp } from '@ngneat/elf';
import { MenuItem } from '../models';
import {
  getAllEntities,
  selectAllEntities,
  selectEntities,
  setEntities,
} from '@ngneat/elf-entities';

@Injectable({
  providedIn: 'root',
})
export class BaseLayoutRepository {
  isMenuVisible$ = store.pipe(select((state) => state.isMenuVisible));
  menuItems$ = store.pipe(selectAllEntities());

  get isMenuVisible(): boolean {
    return store.getValue().isMenuVisible;
  }
  set isMenuVisible(value: boolean) {
    store.update(setProp('isMenuVisible', value));
  }

  toogleIsMenuVisible(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }

  get menuItems(): MenuItem[] {
    return store.query(getAllEntities());
  }

  set menuItems(items: MenuItem[]) {
    store.update(setEntities(items));
  }
}
