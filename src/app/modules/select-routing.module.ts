import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectComponent } from './select/pages/select.component';

const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: SelectComponent },
      { path: 'select', component: SelectComponent }
    ] },
  { path: '**', redirectTo: 'select' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectRoutingModule { }
