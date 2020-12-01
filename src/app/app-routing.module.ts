import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes =
  [{ path: 'welcome-page', component: WelcomePageComponent },
  { path: 'buttons-page', component: ButtonsPageComponent },
  { path: '**', component: ButtonsPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
