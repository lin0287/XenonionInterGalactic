import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';

import { CargoAddComponent } from './cargo-add/cargo-add.component';
import { CargoGetComponent } from './cargo-get/cargo-get.component';
import { CargoEditComponent } from './cargo-edit/cargo-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    TravelPageComponent,
    CargoAddComponent,
    CargoGetComponent,
    CargoEditComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
