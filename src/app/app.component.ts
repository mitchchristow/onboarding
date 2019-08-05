import { Component } from '@angular/core';
import { PropertyBindingType } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username: string = "username";

  getUsername() {
    return this.username;
  }
}
