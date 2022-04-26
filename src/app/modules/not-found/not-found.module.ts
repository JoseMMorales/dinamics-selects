import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { NotFoundPageComponent } from './page/not-found.component';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [CommonModule, NotFoundRoutingModule, SharedModule],
})
export class NotFoundModule {}
