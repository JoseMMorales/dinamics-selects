import { Component, OnInit } from '@angular/core';

interface Country {
  value: string;
  viewValue: string;
};

interface Cities {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  countries: Country[] = [
    {value: 'Spain', viewValue: 'Spain'},
    {value: 'UK', viewValue: 'UK'},
    {value: 'France', viewValue: 'France'},
  ];

  cities: Cities[] = [
    {value: 'Madrid', viewValue: 'Madrid'},
    {value: 'Paris', viewValue: 'Paris'},
    {value: 'London', viewValue: 'London'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
