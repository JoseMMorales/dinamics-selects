import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ToastService } from 'src/app/modules/shared/services/toast.service';
import { Countries, CountryData } from '../models/country.interface';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class DataResolver implements Resolve<CountryData[]> {
  constructor(private apiService: ApiService, private toast: ToastService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CountryData[]> {
    return this.apiService.getCountries().pipe(
      map((countries: Countries) => countries.data),
      catchError((httpError: HttpErrorResponse) => {
        this.toast.onError(httpError);

        return throwError(httpError);
      })
    );
  }
}
