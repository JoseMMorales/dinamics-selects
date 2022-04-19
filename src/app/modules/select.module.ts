import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectRoutingModule } from './select-routing.module';

import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [ SelectComponent ],
  imports: [
    CommonModule,
    SelectRoutingModule
  ]
})
export class SelectModule { }
