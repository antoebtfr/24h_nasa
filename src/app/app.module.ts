import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ModeSelectComponent } from './pages/mode-select/mode-select.component';
import { ExploModeComponent } from './pages/explo-mode/explo-mode.component';
import { Map1Component } from './maps/map1/map1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    IntroComponent,
    ModeSelectComponent,
    ExploModeComponent,
    Map1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
