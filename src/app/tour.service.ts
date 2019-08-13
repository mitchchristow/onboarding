import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  stepsShown: number = 0;

  // Observable sources
  private componentMethodCallSource = new Subject<any>();

  // Observable streams
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  showNextTooltip() {
    this.stepsShown = this.stepsShown + 1;
    this.componentMethodCallSource.next();
  }

  constructor() { }
}
