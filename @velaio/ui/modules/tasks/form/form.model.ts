import {
  minLength,
  minNumber,
  notEmpty,
  propArray,
} from '@rxweb/reactive-form-validators';

export class PersonForm {
  @notEmpty({ message: 'El campo es obligatorio' })
  fullname?: string;

  @notEmpty({ message: 'El campo es obligatorio' })
  @minNumber({ value: 18, message: 'El valor debe ser mayor a 18 años' })
  age?: number;

  @minLength({ value: 1, message: 'Debes asignar por lo menos una habilidad' })
  skills: string[] = [];
}

export class TaskForm {
  @notEmpty({ message: 'El campo es obligatorio' })
  name: string = '';

  @notEmpty({ message: 'El campo es obligatorio' })
  endDate?: string;

  @propArray(PersonForm)
  @minLength({ value: 1, message: 'Debes asignar por lo menos una persona' })
  people: PersonForm[] = [];
}
