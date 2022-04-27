import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangLoader } from './i18n/lang-loader';

import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './core/core.module';

const ANGULAR_MODULES = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  SharedModule,
  CoreModule,
];

const PUBLIC_COMPONENTS = [AppComponent];

@NgModule({
  declarations: [...PUBLIC_COMPONENTS],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: LangLoader,
      },
    }),
    ...ANGULAR_MODULES,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
