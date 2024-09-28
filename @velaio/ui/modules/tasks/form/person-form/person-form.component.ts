import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog, DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  IFormGroup,
  RxFormBuilder,
  RxReactiveFormsModule,
} from '@rxweb/reactive-form-validators';
import { PersonForm } from '../models';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VioInputDirective } from './vio-input.directive';

@Component({
  selector: 'velaio-person-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    VioInputDirective,
  ],
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
})
export class PersonFormComponent implements OnInit {
  private data: PersonForm = inject(DIALOG_DATA);
  dialogRef = inject<DialogRef<PersonForm>>(DialogRef);
  private formBuilder = inject(RxFormBuilder);

  protected formPerson = this.formBuilder.formGroup(
    new PersonForm()
  ) as IFormGroup<PersonForm>;

  protected skill: string = '';

  ngOnInit(): void {
    this.formPerson = this.formBuilder.formGroup(
      new PersonForm(this.data)
    ) as IFormGroup<PersonForm>;
  }

  protected addSkill(): void {
    const skill = this.skill.trim();
    const skills = this.formPerson.value.skills;

    if (
      !this.skill ||
      skills.some((x) => x.toLowerCase() === skill.toLowerCase())
    ) {
      this.skill = '';
      return;
    }

    this.formPerson.controls.skills.setValue([...skills, skill]);
    this.skill = '';
  }

  protected removeSkill(skill: string): void {
    const skills = this.formPerson.value.skills.filter((x) => x != skill);
    this.formPerson.controls.skills.setValue([...skills]);
  }

  protected submit(): void {
    if (this.formPerson.invalid) {
      Object.values(this.formPerson.controls).forEach((c) => {
        c.markAsTouched();
        c.updateValueAndValidity();
      });
      return;
    }

    this.dialogRef.close(this.formPerson.value);
  }

  protected closeDialog(): void {
    this.dialogRef.close();
  }

  static openDialog(
    dialog: Dialog,
    person?: PersonForm
  ): DialogRef<PersonForm, PersonFormComponent> {
    return dialog.open(PersonFormComponent, {
      disableClose: true,
      data: { ...person },
    });
  }
}
