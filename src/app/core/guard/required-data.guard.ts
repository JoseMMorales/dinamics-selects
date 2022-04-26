import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';
import { ToastService } from 'src/app/shared/services/toast.service';

@Injectable({
  providedIn: 'root',
})
export class RequiredDataGuard implements CanActivate {
  constructor(
    private router: Router,
    private apiService: ApiService,
    private toast: ToastService
  ) {}

  canActivate(): Observable<boolean> {
    return this.apiService.getCountries().pipe(
      map((countries) => !!countries),
      catchError((HttpError: HttpErrorResponse) => {
        this.toast.onError(HttpError);
        this.redirectToNotFound();

        return throwError(HttpError);
      })
    );
  }

  redirectToNotFound() {
    this.router.navigate(['not-found']);
  }
}
