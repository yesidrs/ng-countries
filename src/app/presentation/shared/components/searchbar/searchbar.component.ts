import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent {
  @Input() placeholder: string = 'Search...';
  @Output() search: any = () => {};
}
