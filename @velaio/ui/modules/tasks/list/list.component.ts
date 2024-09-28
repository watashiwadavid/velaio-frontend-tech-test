import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from '@velaio/data';

@Component({
  selector: 'velaio-tasks-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class TasksListPage {
  tasksService = inject(TasksService);

  tasks$ = this.tasksService.tasks$;
}
