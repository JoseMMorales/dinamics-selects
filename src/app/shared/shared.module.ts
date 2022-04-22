import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material.module';

import { LoadingComponent } from './component/loading/loading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const SHARED_COMPONENTS = [ LoadingComponent ];

const ANGULAR_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
];

const THIRD_PARTIES_MODULE = [
  MaterialModule
];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [...ANGULAR_MODULES, ...THIRD_PARTIES_MODULE],
  exports: [
    ...SHARED_COMPONENTS,
    ...ANGULAR_MODULES,
    ...THIRD_PARTIES_MODULE
  ]
})
export class SharedModule { }
