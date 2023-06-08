import { Component } from '@angular/core';
import { GetCountryByCapitalUseCase } from 'src/app/domain/countries/countries.domain';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'countries-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {
  countries: Country[] = [];

  constructor(private getByCapital: GetCountryByCapitalUseCase) {}

  searchByCapital(term: string) {
    this.getByCapital.execute(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
