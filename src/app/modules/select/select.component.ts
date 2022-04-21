import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/core/services/api.service';
import { Cities } from '../../core/models/city.interface';
import { Countries, CountryData } from '../../core/models/country.interface';

import { finalize, map } from 'rxjs/operators';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  countries: CountryData[] | undefined;
  cities: Cities[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.renderCountries();
  }

  renderCountries(): void {
    this.isLoading = true;
    this.apiService.getCountries().pipe(
      map((countries: Countries) => countries.data),
      finalize(()=>this.isLoading = false)
    ).subscribe((countries: CountryData[]) => this.countries = countries);
  }
}
