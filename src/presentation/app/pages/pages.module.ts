import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { CountryDetailsPageComponent } from './country-details-page/country-details-page.component';
import { CountriesPageComponent } from './countries-page/countries-page.component';
import { RegionsPageComponent } from './regions-page/regions-page.component';
import { CapitalsPageComponent } from './capitals-page/capitals-page.component';

@NgModule({
  declarations: [CountryDetailsPageComponent, CountriesPageComponent, RegionsPageComponent, CapitalsPageComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
