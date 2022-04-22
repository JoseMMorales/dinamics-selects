import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { CountryData } from 'src/app/core/models/country.interface';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss']
})
export class SelectFormComponent implements OnInit {

  @Input() countries!: CountryData[];
  @Input() cities!: string[];
  @Output() countryChanges = new EventEmitter<string>();
  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSelectCity(country: string): void {
    this.countryChanges.emit(country);
    this.form.get('city')?.enable();
  }

  private initForm(): void {
    if(!this.form) {
      this.form = this.fb.group({
        country: ['', Validators.required],
        city: [{ value: '', disabled: true }, Validators.required],
      })
    }
  }
}
