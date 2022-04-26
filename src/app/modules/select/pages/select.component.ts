import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/core/services/api.service';
import { Cities } from '../../../core/models/city.interface';
import { Countries, CountryData } from '../../../core/models/country.interface';

import { finalize, map } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastService } from '../../../shared/services/toast.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  countries!: CountryData[];
  cities!: string[];
  isLoading: boolean = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.renderCountries();
  }

  renderCountries(): void {
    this.isLoading = true;
    this.countries = this.route.snapshot.data.countries;
    this.isLoading = false;
  }

  onSelectCity(country: string): void {
    let data = { country: country };

    this.isLoading = true;
    this.apiService
      .getCities(data)
      .pipe(
        finalize(() => (this.isLoading = false)),
        map((cities: Cities) => cities.data)
      )
      .subscribe(
        (cities: string[]) => {
          this.cities = cities;
          this.toast.onSuccess('City Selection Ready...');
        },
        (httpError: HttpErrorResponse) => this.toast.onError(httpError)
      );
  }
}
