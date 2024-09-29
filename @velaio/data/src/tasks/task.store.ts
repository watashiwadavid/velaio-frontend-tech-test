import { createStore } from '@ngneat/elf';
import { withEntities } from '@ngneat/elf-entities';
import { Task } from './task.model';
import { localStorageStrategy, persistState } from '@ngneat/elf-persist-state';

export const store = createStore({ name: 'taskStore' }, withEntities<Task>());

export const persist = persistState(store, {
  key: 'taskStore',
  storage: localStorageStrategy,
});
