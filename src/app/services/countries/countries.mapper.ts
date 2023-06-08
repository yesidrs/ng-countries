import { Country } from "src/app/models/country.model";

export class CountryMapper {
  static mapResponseToCountry(response: any): Country {
    return {
      name: response.name,
      flags: response.flags,
      capital: response.capital,
      population: response.population,
    };
  }
}
