import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiService } from './services/api.service';

const ANGULAR_MODULES = [ HttpClientModule ]

@NgModule({
  imports: [...ANGULAR_MODULES],
  providers: [ApiService],
})
export class CoreModule { }
