import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country.model';

export abstract class CountriesRepository {
  abstract getByName(name: string): Observable<Country[]>;

  abstract getByCapital(capital: string): Observable<Country[]>;

  abstract getByRegion(region: string): Observable<Country[]>;
}
