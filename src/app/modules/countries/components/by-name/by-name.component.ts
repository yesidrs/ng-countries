import { Component } from '@angular/core';
import { GetCountryByNameUseCase } from 'src/app/domain/countries/countries.domain';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'countries-by-name',
  templateUrl: './by-name.component.html',
})
export class ByNameComponent {
  countries: Country[] = [];

  constructor(private getByName: GetCountryByNameUseCase) {}

  searchByName(term: string) {
    this.getByName.execute(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
