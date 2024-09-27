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
import { PersonForm, TaskForm } from './form.model';
declare var Datepicker: any;

@Component({
  selector: 'velaio-task-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class TaskFormPage implements OnInit, AfterViewInit {
  private formBuilder = inject(RxFormBuilder);
  protected form = this.formBuilder.formGroup(
    new TaskForm()
  ) as IFormGroup<TaskForm>;

  @ViewChild('dateEnd') dateInput!: ElementRef;

  ngOnInit(): void {
    const person: PersonForm = new PersonForm();
    person.fullname = 'David';
    person.age = 33;
    person.skills = ['.Net', 'Angular'];

    this.form.controls.people.setValue([person]);
    this.form.valueChanges.subscribe((value) => console.log(value));
  }

  ngAfterViewInit() {
    // Inicializa el datepicker
    const datepickerEl = this.dateInput.nativeElement;
    debugger;
    if (datepickerEl) {
      const dp = new Datepicker(datepickerEl, {
        autohide: true,
        format: 'dd-mm-yyyy',
        language: 'es',
      });

      // Escuchar el evento de cambio de fecha y actualizar el valor en el FormControl
      datepickerEl.addEventListener('changeDate', (event: any) => {
        this.form.controls.endDate?.setValue(event.detail.date); // Actualiza el FormControl con la fecha seleccionada
      });
    }
  }
}
