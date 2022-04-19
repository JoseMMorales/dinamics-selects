import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectRoutingModule } from './select-routing.module';

import { SelectComponent } from './select/select.component';
import { MaterialModule } from '../core/material.module';


@NgModule({
  declarations: [ SelectComponent ],
  imports: [
    CommonModule,
    SelectRoutingModule,
    MaterialModule
  ]
})
export class SelectModule { }
