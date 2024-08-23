import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    // AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,    // <-- Add FormsModule here
    LoginComponent  // <-- Move LoginComponent to imports
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }