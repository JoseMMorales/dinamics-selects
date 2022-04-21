import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const Material = [
  MatSelectModule,
  MatProgressSpinnerModule
];

@NgModule({
  exports: [Material],
  imports: [Material]
})
export class MaterialModule { }
