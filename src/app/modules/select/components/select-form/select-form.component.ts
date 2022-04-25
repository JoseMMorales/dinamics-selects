import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReplaySubject, Subscription } from 'rxjs';

import { CountryData } from 'src/app/core/models/country.interface';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss'],
})
export class SelectFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() countries: CountryData[] = [];
  @Input() cities: string[] = [];
  @Output() countryChanges = new EventEmitter<string>();

  form!: FormGroup;
  countriesFilterCtrl: FormControl = new FormControl();
  citiesFilterCtrl: FormControl = new FormControl();
  filteredCountries$: ReplaySubject<CountryData[]> = new ReplaySubject<
    CountryData[]
  >();
  filteredCities$: ReplaySubject<string[]> = new ReplaySubject<string[]>();
  valueChangesCountry!: Subscription;
  valueChangesCity!: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges() {
    this.setupSelect(this.countries, this.filteredCountries$);
    this.setupSelect(this.cities, this.filteredCities$);
    this.selectFilterChanges(
      this.countries,
      this.countriesFilterCtrl,
      this.filteredCountries$,
      this.valueChangesCountry
    ),
      this.selectFilterChanges(
        this.cities,
        this.citiesFilterCtrl,
        this.filteredCities$,
        this.valueChangesCity
      );
  }

  ngOnDestroy() {
    this.valueChangesCountry.unsubscribe();
    this.valueChangesCity.unsubscribe();
  }

  onSelectCity(country: string): void {
    this.countryChanges.emit(country);
    this.form.get('city')?.enable();
  }

  private initForm(): void {
    if (!this.form) {
      this.form = this.fb.group({
        country: ['', Validators.required],
        city: [{ value: '', disabled: true }, Validators.required],
      });
    }
  }

  private setupSelect(
    arrayToFilter: string[] | CountryData[],
    filteredData$: ReplaySubject<any[]>
  ): void {
    filteredData$.next(arrayToFilter);
  }

  private selectFilterChanges(
    arrayToFilter: string[] | CountryData[],
    filterCtr: FormControl,
    filteredData$: ReplaySubject<any[]>,
    valuesChangeSelect: Subscription
  ): void {
    valuesChangeSelect = filterCtr.valueChanges.subscribe(() =>
      this.filterSelect(arrayToFilter, filterCtr, filteredData$)
    );
  }

  private filterSelect(
    arrayToFilter: string[] | CountryData[],
    filterCtr: FormControl,
    filteredData$: ReplaySubject<any[]>
  ): void {
    let isStrings = (obj: string[] | CountryData[]): obj is string[] =>
      typeof obj[0] === 'string';

    if (!arrayToFilter) {
      return;
    }

    let search = filterCtr.value;
    !search && filteredData$.next(arrayToFilter);

    isStrings(arrayToFilter)
      ? filteredData$.next(
          arrayToFilter.filter((city: string) =>
            city.toLowerCase().startsWith(search.toLowerCase())
          )
        )
      : filteredData$.next(
          arrayToFilter.filter((country: { name: string }) =>
            country.name.toLowerCase().startsWith(search.toLowerCase())
          )
        );
  }
}
