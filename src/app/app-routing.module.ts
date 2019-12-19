import { Map1Component } from './maps/map1/map1.component';
import { ExploModeComponent } from './pages/explo-mode/explo-mode.component';
import { ModeSelectComponent } from './pages/mode-select/mode-select.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'intro', component: IntroComponent},
  {path: 'selectmode', component: ModeSelectComponent},
  {path: 'explo-mode', component: ExploModeComponent},
  {path: 'explo-mode/map1', component: Map1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
