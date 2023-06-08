import { Component } from '@angular/core';
import { GetCountryByRegionUseCase } from 'src/app/domain/countries/countries.domain';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region.component.html',
})
export class ByRegionComponent {
  countries: Country[] = [];

  constructor(private getByRegion: GetCountryByRegionUseCase) {}

  searchByRegion(term: string) {
    this.getByRegion.execute(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}
