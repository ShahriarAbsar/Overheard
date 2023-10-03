import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingComponent } from './landing/landing.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: "" ,component:LandingPageComponent},
  {path: "landing" ,component:LandingComponent},
  {path: "admin", component:AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
