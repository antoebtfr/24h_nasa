import { ModeSelectComponent } from './pages/mode-select/mode-select.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './pages/intro/intro.component';


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'intro', component: IntroComponent},
  {path: 'selectmode', component: ModeSelectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
