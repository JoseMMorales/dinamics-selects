import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './core/services/api.service';
import { SharedModule } from './shared/shared.module';

const ANGULAR_MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  SharedModule
]
@NgModule({
  declarations: [AppComponent],
  imports: [...ANGULAR_MODULES],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
