import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectRoutingModule } from './select-routing.module';
import { MaterialModule } from '../core/material.module';
import { SharedModule } from '../shared/shared.module';
import { SelectComponent } from './select/pages/select.component';

import { SelectFormComponent } from './select/components/select-form/select-form.component';


@NgModule({
  declarations: [ SelectComponent, SelectFormComponent ],
  imports: [
    CommonModule,
    SelectRoutingModule,
    SharedModule,
  ]
})
export class SelectModule { }
