import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';

const Material = [
  MatSelectModule,
];

@NgModule({
  exports: [Material],
  imports: [Material]
})
export class MaterialModule { }
