import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequiredDataGuard } from './core/guard/required-data.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [RequiredDataGuard],
    loadChildren: () =>
      import('./modules/select/select.module').then((m) => m.SelectModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./modules/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
