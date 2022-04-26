import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Cities } from '../models/city.interface';
import { Countries, Country } from '../models/country.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<Countries> {
    let url = `${environment.countryURL}flag/images`;

    return this.http.get<Countries>(url);
  }

  getCities(country: Country): Observable<Cities> {
    let url = environment.cityURL;

    return this.http.post<Cities>(url, country);
  }
}
