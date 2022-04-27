import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectRoutingModule } from './select-routing.module';
import { SharedModule } from '../shared/shared.module';

import { SelectComponent } from './pages/select.component';
import { SelectFormComponent } from './components/select-form/select-form.component';

@NgModule({
  declarations: [SelectComponent, SelectFormComponent],
  imports: [CommonModule, SelectRoutingModule, SharedModule],
})
export class SelectModule {}
