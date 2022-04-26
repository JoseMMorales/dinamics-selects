import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectComponent } from './pages/select.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SelectComponent,
      },
      {
        path: 'select',
        component: SelectComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRoutingModule {}
