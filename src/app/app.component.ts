import { Component, Directive } from '@angular/core';
import { PropertyBindingType } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username: string = "test";

  getUsername() {
    return this.username;
  }
}
