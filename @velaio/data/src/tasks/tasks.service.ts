import { Injectable } from '@angular/core';
import { store } from './task.store';
import {
  addEntities,
  selectAllEntities,
  updateEntities,
} from '@ngneat/elf-entities';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks$ = store.pipe(selectAllEntities());

  add(task: Task): void {
    store.update(addEntities([task]));
  }

  complete(id: string): void {
    store.update(
      updateEntities(id, (entity) => ({
        ...entity,
        isComplete: true,
      }))
    );
  }
}
