import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[hint]'
})
export class HintDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.backgroundColor = 'yellow';
    var floater = document.getElementById("floater");
    // floater.style.backgroundColor = 'yellow';
    // floater.textContent = "HINT";
    // floater is null?
  }
}
