import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavbarComponent],
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function setViewport(width: number) {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: width,
    });
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();
  }

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have isMenuVisible in false by default', () => {
    expect(component.isMenuVisible).toBeFalse();
  });

  it('should change navbar icon on small size', () => {
    setViewport(1024);
    const element = fixture.debugElement.query(By.css('[test-user-button]'));
    expect(element).toBeTruthy();
  });
});
