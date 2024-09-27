import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseLayoutComponent } from './base-layout.component';
import { By } from '@angular/platform-browser';

describe('BaseLayoutComponent', () => {
  let component: BaseLayoutComponent;
  let fixture: ComponentFixture<BaseLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BaseLayoutComponent],
    });
    fixture = TestBed.createComponent(BaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
