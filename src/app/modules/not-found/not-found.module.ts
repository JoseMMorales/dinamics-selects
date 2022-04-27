import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';

import { NotFoundPageComponent } from './page/not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, NotFoundRoutingModule, SharedModule],
})
export class NotFoundModule {}
