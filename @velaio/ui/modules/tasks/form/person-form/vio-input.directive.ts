import {
  Directive,
  ElementRef,
  inject,
  Optional,
  Renderer2,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import {
  IAbstractControl,
  RxFormControl,
} from '@rxweb/reactive-form-validators';
import { fromEvent, merge } from 'rxjs';

@Directive({
  selector: '[vio-input]',
  standalone: true,
})
export class VioInputDirective {
  @Optional()
  private ngControl = inject(NgControl);

  private errorContainer!: HTMLElement;

  constructor(private element: ElementRef, private renderer: Renderer2) {
    const classes = [
      'bg-gray-50',
      'border',
      'text-gray-900',
      'text-sm',
      'rounded-lg',
      'block',
      'w-full',
      'p-2.5',
    ];

    classes.forEach((c) => {
      this.renderer.addClass(this.element.nativeElement, c);
    });
  }

  ngOnInit(): void {
    if (this.ngControl) {
      this.errorContainer = this.renderer.createElement('small');
      this.renderer.setStyle(this.errorContainer, 'color', 'red');
      this.renderer.setStyle(this.errorContainer, 'fontSize', '12px');
      this.renderer.appendChild(
        this.element.nativeElement.parentNode,
        this.errorContainer
      );

      this.checkErrors();

      fromEvent(this.element.nativeElement, 'blur').subscribe(() =>
        this.checkErrors()
      );

      this.ngControl.statusChanges?.subscribe((x) => this.checkErrors());
    }
  }

  checkErrors() {
    const classes = [
      'border-red-500',
      'focus:ring-red-500',
      'focus:border-red-500',
      'border-gray-300',
      'focus:ring-blue-500',
      'focus:border-blue-500',
    ];

    classes.forEach((c) =>
      this.renderer.removeClass(this.element.nativeElement, c)
    );

    this.clearErrors();

    if (
      this.ngControl.invalid &&
      (this.ngControl.touched || this.ngControl.dirty)
    ) {
      this.renderer.addClass(this.element.nativeElement, 'border-red-500');
      this.renderer.addClass(this.element.nativeElement, 'focus:ring-red-500');
      this.renderer.addClass(
        this.element.nativeElement,
        'focus:border-red-500'
      );

      this.showError((this.ngControl.control as RxFormControl).errorMessage);
    } else {
      this.renderer.addClass(this.element.nativeElement, 'border-gray-300');
      this.renderer.addClass(this.element.nativeElement, 'focus:ring-blue-500');
      this.renderer.addClass(
        this.element.nativeElement,
        'focus:border-blue-500'
      );
    }
  }

  private showError(message: string) {
    const text = this.renderer.createText(message);
    this.renderer.appendChild(this.errorContainer, text);
  }

  private clearErrors() {
    this.errorContainer.innerHTML = '';
  }
}
