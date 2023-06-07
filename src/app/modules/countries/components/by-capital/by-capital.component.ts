import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'countries-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {
  searchByCapital(term: string) {
    console.log({ term });
  }
}
