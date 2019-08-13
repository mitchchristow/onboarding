import { Component, OnInit, ElementRef, ViewChild, Directive} from '@angular/core';
import { HostListener } from "@angular/core";
import { TourService } from '../tour.service';

@Component({
  selector: '[tooltip]',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})

export class TooltipComponent implements OnInit {
  tooltipHeight: number = 150;
  offset: number = 10;
  tooltipWidth: number;
  tourService: TourService;
  dismissed: boolean = false;
  step:number;
  tooltipX: number; tooltipY:number;

  onboardingElement: HTMLElement;
  screenHeight: number; screenWidth: number;
  
  constructor(el: ElementRef, tourService: TourService) { 
    this.tourService = tourService;
    this.onboardingElement=el.nativeElement;
    this.step = Number(this.onboardingElement.getAttribute('step'));
    if (isNaN(this.step)) {
      // Display all tooltips at the same time. 
      // Note: unknown behavior if some tooltips have the step attribute and others don't.
      console.warn("Invalid step number for tooltip")
      this.step = 1;
    }
    this.evaluateDismissedState();
    tourService.componentMethodCalled$.subscribe(
      () => {
        this.evaluateDismissedState();
      }
    );
  }
  
  evaluateDismissedState() {
    if (this.step - this.tourService.stepsShown == 1) {
      this.dismissed = false;
    } else {
      this.dismissed = true;
    }
  }

  ngOnInit() {
    this.getTooltipOffsets();
  }

  onDismissed() {
    this.dismissed = true;
    this.tourService.showNextTooltip();
  }

  getTooltipOffsets() {
    this.getScreenSize();
    // these are relative to the viewport, i.e. the window
    var viewportOffset = this.onboardingElement.getBoundingClientRect();
    console.log(viewportOffset);
    this.tooltipX = viewportOffset.left + this.offset;
    this.tooltipY = viewportOffset.top + this.onboardingElement.offsetHeight + this.offset;
    if (this.tooltipY > (this.screenHeight - this.tooltipHeight)) {
      this.tooltipY = viewportOffset.top - this.tooltipHeight - this.offset;
    }
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
    }

  getTooltipText(){}
}
