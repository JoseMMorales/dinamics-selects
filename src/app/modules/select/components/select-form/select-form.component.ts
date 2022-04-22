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
  @Input() countries: CountryData[] | undefined;
  @Input() cities: string[] | undefined;
  @Output() countryChanges = new EventEmitter<string>();

  form!: FormGroup;
  countriesFilterCtrl: FormControl = new FormControl();
  citiesFilterCtrl: FormControl = new FormControl();
  filteredCountries: ReplaySubject<CountryData[]> = new ReplaySubject<
    CountryData[]
  >();
  filteredCities: ReplaySubject<string[]> = new ReplaySubject<string[]>();
  valueChangesCountry!: Subscription;
  valueChangesCity!: Subscription;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges() {
    this.setUpCountry();
    this.setUpCity();
    this.countryFilterChanges();
    this.cityFilterChanges();
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

  private setUpCountry(): void {
    this.filteredCountries.next(this.countries);
  }

  private setUpCity(): void {
    this.filteredCities.next(this.cities);
  }

  private countryFilterChanges(): void {
    this.valueChangesCountry = this.countriesFilterCtrl.valueChanges.subscribe(
      () => this.filterSelectCountry()
    );
  }

  private cityFilterChanges(): void {
    this.valueChangesCity = this.citiesFilterCtrl.valueChanges.subscribe(() =>
      this.filterSelectCity()
    );
  }

  private filterSelectCountry(): void {
    if (!this.countries) {
      return;
    }

    let search = this.countriesFilterCtrl.value;
    !search && this.filteredCountries.next(this.countries);

    this.filteredCountries.next(
      this.countries.filter((country: CountryData) =>
        country.name.toLowerCase().startsWith(search.toLowerCase())
      )
    );
  }

  private filterSelectCity(): void {
    if (!this.cities) {
      return;
    }

    let search = this.citiesFilterCtrl.value;
    !search && this.filteredCities.next(this.cities);

    this.filteredCities.next(
      this.cities.filter((city: string) =>
        city.toLowerCase().startsWith(search.toLowerCase())
      )
    );
  }
}
