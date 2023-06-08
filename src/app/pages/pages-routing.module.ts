import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapitalsPageComponent } from './capitals-page/capitals-page.component';
import { CountriesPageComponent } from './countries-page/countries-page.component';
import { CountryDetailsPageComponent } from './country-details-page/country-details-page.component';
import { RegionsPageComponent } from './regions-page/regions-page.component';

export const routes: Routes = [
  { path: 'by-name', component: CountriesPageComponent },
  { path: 'by-capitals', component: CapitalsPageComponent },
  { path: 'country/id', component: CountryDetailsPageComponent },
  { path: 'by-regions', component: RegionsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
