import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Mars3dDirective } from './mars3d.directive';

@NgModule({
  declarations: [
    AppComponent,
    Mars3dDirective
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
