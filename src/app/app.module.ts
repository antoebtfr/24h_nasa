import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ModeSelectComponent } from './pages/mode-select/mode-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    IntroComponent,
    ModeSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
