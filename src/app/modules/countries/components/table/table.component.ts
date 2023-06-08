import { Component, Input } from '@angular/core';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'countries-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() countries: Country[] = [];
}
