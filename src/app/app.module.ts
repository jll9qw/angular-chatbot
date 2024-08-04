import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
=======
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent
>>>>>>> c2f94a8 (fist commit)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
<<<<<<< HEAD
  providers: [],
=======
  providers: [
    provideClientHydration()
  ],
>>>>>>> c2f94a8 (fist commit)
  bootstrap: [AppComponent]
})
export class AppModule { }
