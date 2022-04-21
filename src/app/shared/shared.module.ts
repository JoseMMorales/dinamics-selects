import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material.module';

import { LoadingComponent } from './component/loading/loading.component';

const SHARED_COMPONENTS = [LoadingComponent];

const SHARED_MODULES = [MaterialModule, CommonModule];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_COMPONENTS]
})
export class SharedModule { }
