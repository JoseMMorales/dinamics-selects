import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../core/material.module';
import { HotToastModule } from '@ngneat/hot-toast';

import { LoadingComponent } from './component/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { ToastService } from './services/toast.service';
import { HeaderComponent } from './component/header/header.component';
import { TranslateModule } from '@ngx-translate/core';

const SHARED_COMPONENTS = [LoadingComponent, HeaderComponent];

const ANGULAR_MODULES = [CommonModule, ReactiveFormsModule, FormsModule];

const THIRD_PARTIES_MODULE = [MaterialModule, NgxMatSelectSearchModule];

const THIRD_PARTY_LIBRARY = [TranslateModule];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [
    ...ANGULAR_MODULES,
    ...THIRD_PARTIES_MODULE,
    HotToastModule.forRoot({
      duration: 3000,
      dismissible: true,
    }),
    ...THIRD_PARTY_LIBRARY,
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...ANGULAR_MODULES,
    ...THIRD_PARTIES_MODULE,
    ...THIRD_PARTY_LIBRARY,
  ],
  providers: [ToastService],
})
export class SharedModule {}
