import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

const Material = [MatSelectModule, MatProgressSpinnerModule, MatButtonModule];

@NgModule({
  exports: [Material],
  imports: [Material],
})
export class MaterialModule {}
