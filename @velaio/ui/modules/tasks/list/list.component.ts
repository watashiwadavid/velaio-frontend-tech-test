import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TasksService } from '@velaio/data';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'velaio-tasks-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class TasksListPage {
  tasksService = inject(TasksService);

  filter$ = new BehaviorSubject<boolean | undefined>(undefined);

  hasTasks$ = this.tasksService.tasks$.pipe(map((tasks) => tasks.length > 0));
  tasks$ = combineLatest([this.tasksService.tasks$, this.filter$]).pipe(
    map(([tasks, filter]) =>
      tasks.filter((x) =>
        filter === undefined ? true : x.isComplete === filter
      )
    )
  );

  filters: { text: string; value: boolean | undefined }[] = [
    { text: 'Todas', value: undefined },
    { text: 'Completadas', value: true },
    { text: 'Pendientes', value: false },
  ];

  markTaskComplete(task: Task): void {
    this.tasksService.complete(task.id);
  }
}
