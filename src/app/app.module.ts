import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

const ANGULAR_MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  SharedModule,
  CoreModule
]

const PUBLIC_COMPONENTS = [ AppComponent ]

@NgModule({
  declarations: [...PUBLIC_COMPONENTS],
  imports: [...ANGULAR_MODULES],
  bootstrap: [AppComponent]
})
export class AppModule { }
