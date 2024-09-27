import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseLayoutService {
  private isMenuVisibleSubject = new BehaviorSubject<boolean>(false);

  constructor() {}
}
