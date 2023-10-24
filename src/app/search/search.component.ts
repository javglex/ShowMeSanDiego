import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      search works!
    </p>
  `,
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

}
