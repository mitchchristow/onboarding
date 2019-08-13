import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  // Observable sources
  private componentMethodCallSource = new Subject<any>();

  // Observable streams
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();

  showNextTooltip() {
    this.stepsShown = this.stepsShown + 1;
    this.componentMethodCallSource.next();
  }

  stepsShown: number = 0;

  constructor() { }
}
