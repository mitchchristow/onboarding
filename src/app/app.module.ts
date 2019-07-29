import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { HintDirective } from './hint.directive';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    HintDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
