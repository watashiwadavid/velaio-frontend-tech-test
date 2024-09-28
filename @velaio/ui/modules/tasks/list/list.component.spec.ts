import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListPage } from './list.component';

describe('ListComponent', () => {
  let component: TasksListPage;
  let fixture: ComponentFixture<TasksListPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TasksListPage],
    });
    fixture = TestBed.createComponent(TasksListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
