import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';

import { CargoAddComponent } from './cargo-add/cargo-add.component';
import { CargoEditComponent } from './cargo-edit/cargo-edit.component';
import { CargoGetComponent } from './cargo-get/cargo-get.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'travel', component: TravelPageComponent },
  { path: 'cargo', component: CargoAddComponent },

  { path: 'cargo/edit', component: CargoEditComponent },
  { path: 'cargo/get', component: CargoGetComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
