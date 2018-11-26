import { AppComponente1 } from './app.componente1';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponente1],
  bootstrap: [AppComponente1]
})
export class AppModule { }
