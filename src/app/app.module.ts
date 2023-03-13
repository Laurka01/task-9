import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Main1Component } from './main1/main1.component';
import { Main2Component } from './main2/main2.component';
import { Main3Component } from './main3/main3.component';
import { FooterComponent } from './footer/footer.component';
import { Footer2Component } from './footer2/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Main1Component,
    Main2Component,
    Main3Component,
    FooterComponent,
    Footer2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
