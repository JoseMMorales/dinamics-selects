import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const Material = [
  MatSelectModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatToolbarModule,
];

@NgModule({
  exports: [Material],
  imports: [Material],
})
export class MaterialModule {}
