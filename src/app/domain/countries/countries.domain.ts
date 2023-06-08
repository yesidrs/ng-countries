import { Country } from 'src/app/models/country.model';
import { CountriesService } from '../../services/countries/countries.service';
import { CountryMapper } from 'src/app/services/countries/countries.mapper';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';

@Injectable()
export class GetCountryByNameUseCase {
  constructor(private countriesService: CountriesService) {}

  execute(name: string): Observable<Country[]> {
    return this.countriesService.getByName(name).pipe(
      switchMap((data) => {
        const countries = data.map((country) =>
          CountryMapper.mapResponseToCountry(country)
        );
        return of(countries) as Observable<Country[]>;
      })
    );
  }
}

@Injectable()
export class GetCountryByCapitalUseCase {
  constructor(private countriesService: CountriesService) {}

  execute(capital: string): Observable<Country[]> {
    return this.countriesService.getByCapital(capital).pipe(
      switchMap((data) => {
        const countries = data.map((country) =>
          CountryMapper.mapResponseToCountry(country)
        );
        return of(countries) as Observable<Country[]>;
      })
    );
  }
}

@Injectable()
export class GetCountryByRegionUseCase {
  constructor(private countriesService: CountriesService) {}

  execute(region: string): Observable<Country[]> {
    return this.countriesService.getByRegion(region).pipe(
      switchMap((data) => {
        const countries = data.map((country) =>
          CountryMapper.mapResponseToCountry(country)
        );
        return of(countries) as Observable<Country[]>;
      })
    );
  }
}
