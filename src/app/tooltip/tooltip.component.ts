import { Component, OnInit, ElementRef, ViewChild, Directive} from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: '[tooltip]',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})

export class TooltipComponent implements OnInit {
  tooltipHeight: number = 150;
  tooltipWidth: number;
  dismissed: boolean = false;
  step:number;
  tooltipX: number; tooltipY:number;

  onboardingElement: HTMLElement;
  screenHeight: number; screenWidth: number;
  
  constructor(el: ElementRef) { 
    this.onboardingElement=el.nativeElement;
    this.step = Number(this.onboardingElement.getAttribute('step'));
    // check all inputs are valid, or abort
    if (isNaN(this.step)) {
      console.warn("Invalid step number for tooltip")
      this.step = 1;
    }
    // var needsOnboarding  = document.querySelector('[hint]');
  }

  ngOnInit() {
    this.getTooltipOffsets();
  }

  getTooltipOffsets() {
    this.getScreenSize();
    // these are relative to the viewport, i.e. the window
    var viewportOffset = this.onboardingElement.getBoundingClientRect();
    this.tooltipX = viewportOffset.left + 10;
    console.log(viewportOffset.top);
    console.log(this.onboardingElement.offsetHeight);
    this.tooltipY = viewportOffset.top + this.onboardingElement.offsetHeight + 10;
    console.log(this.tooltipHeight);
    if (this.tooltipY > (this.screenHeight - this.tooltipHeight)) {
      this.tooltipY = viewportOffset.top - this.tooltipHeight - 10;
    }
    console.log(viewportOffset);
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.screenHeight = window.innerHeight;
      this.screenWidth = window.innerWidth;
      console.log(this.screenHeight, this.screenWidth);
    }
 
  getTooltipStep(){}

  getTooltipText(){}
}
