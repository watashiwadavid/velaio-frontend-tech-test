import {
  minLength,
  notEmpty,
  propArray,
} from '@rxweb/reactive-form-validators';

import { PersonForm } from './task-person-form.model';

export class TaskForm {
  @notEmpty({ message: 'El campo es obligatorio' })
  name: string = '';

  @notEmpty({ message: 'El campo es obligatorio' })
  endDate?: string;

  @propArray(PersonForm)
  @minLength({ value: 1, message: 'Debes asignar por lo menos una persona' })
  people: PersonForm[] = [];
}
