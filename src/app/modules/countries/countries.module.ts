import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ByCapitalComponent } from './components/by-capital/by-capital.component';
import { ByRegionComponent } from './components/by-region/by-region.component';

import { SharedModule } from '../../shared/shared.module';
import { ByNameComponent } from './components/by-name/by-name.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
  ],
  providers: [],
})
export class CountriesModule {}
