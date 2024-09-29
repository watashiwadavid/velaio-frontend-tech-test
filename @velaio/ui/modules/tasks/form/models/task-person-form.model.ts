import {
  minLength,
  minNumber,
  notEmpty,
} from '@rxweb/reactive-form-validators';

export class PersonForm {
  @notEmpty({ message: 'El campo es obligatorio' })
  @minLength({ value: 5, message: 'Minimo 5 caracteres' })
  fullname?: string;

  @notEmpty({ message: 'El campo es obligatorio' })
  @minNumber({ value: 18, message: 'El valor debe ser mayor a 18 años' })
  age?: number;

  @minLength({ value: 1, message: 'Debes asignar por lo menos una habilidad' })
  skills: string[] = [];

  constructor(obj?: Partial<PersonForm>) {
    Object.assign(this, obj);
  }
}
