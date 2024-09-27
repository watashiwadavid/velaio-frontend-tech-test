import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormPage } from './form.component';

describe('FormComponent', () => {
  let component: TaskFormPage;
  let fixture: ComponentFixture<TaskFormPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TaskFormPage],
    });
    fixture = TestBed.createComponent(TaskFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
