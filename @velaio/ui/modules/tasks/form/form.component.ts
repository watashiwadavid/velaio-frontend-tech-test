import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IFormGroup,
  RxFormBuilder,
  RxReactiveFormsModule,
} from '@rxweb/reactive-form-validators';
import { PersonForm, TaskForm } from './models';
import { PersonFormComponent } from './person-form/person-form.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { VioInputDirective } from '../../../directives/vio-input.directive';
import { Router, RouterModule } from '@angular/router';
import { TasksService } from '@velaio/data';
declare var Datepicker: any;

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'velaio-task-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    RouterModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    PersonFormComponent,
    VioInputDirective,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class TaskFormPage implements OnInit, AfterViewInit {
  private dialog = inject(Dialog);
  private formBuilder = inject(RxFormBuilder);
  private tasksService = inject(TasksService);
  private router = inject(Router);

  protected formTask = this.formBuilder.formGroup(
    new TaskForm()
  ) as IFormGroup<TaskForm>;

  @ViewChild('dateEnd') dateInput!: ElementRef;

  ngOnInit(): void {
    this.formTask.valueChanges.subscribe((value) => console.log(value));
  }

  ngAfterViewInit() {
    const datepickerEl = this.dateInput.nativeElement;

    if (datepickerEl) {
      new Datepicker(datepickerEl, {
        autohide: true,
      });

      datepickerEl.addEventListener('changeDate', (event: any) => {
        const date = (event.detail.date as Date).toLocaleDateString('en-US');
        this.formTask.controls.date?.setValue(date);
      });
    }
  }

  submit() {
    if (this.formTask.invalid) {
      Object.values(this.formTask.controls).forEach((c) => {
        c.markAsTouched();
        c.updateValueAndValidity();
      });
      return;
    }

    const task = this.formTask.value;

    this.tasksService.add({
      id: uuidv4(),
      name: task.name,
      date: task.date!,
      people: task.people.map((p) => {
        return {
          name: p.fullname || '',
          age: p.age || 0,
          skills: p.skills,
        };
      }),
      isComplete: false,
    });

    this.router.navigateByUrl('/tasks');
  }

  addPerson(): void {
    const dialogRef = PersonFormComponent.openDialog(this.dialog);

    dialogRef.closed.subscribe((personNew) => {
      if (personNew) {
        const people = [...this.formTask.value.people, personNew];
        this.formTask.controls.people.setValue(people);
      }
    });
  }

  editPerson(index: number): void {
    const people = [...this.formTask.value.people];
    const dialogRef = PersonFormComponent.openDialog(this.dialog, {
      ...people[index],
    });

    dialogRef.closed.subscribe((personUpdated) => {
      if (personUpdated) {
        people[index] = new PersonForm(personUpdated);
        this.formTask.controls.people.setValue(people);
      }
    });
  }

  removePerson(index: number): void {
    const people = [...this.formTask.value.people];
    people.splice(index, 1);
    this.formTask.controls.people.setValue(people);
  }
}
