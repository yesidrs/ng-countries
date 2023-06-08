import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../models/country.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {}

  getByName(name: string): Observable<Country[]> {
    const url = `${this.apiUrl}name/${name}`;
    return this.http.get<Country[]>(url);
  }

  getByCapital(capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}capital/${capital}`;
    return this.http.get<Country[]>(url);
  }

  getByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiUrl}region/${region}`;
    return this.http.get<Country[]>(url);
  }
}
