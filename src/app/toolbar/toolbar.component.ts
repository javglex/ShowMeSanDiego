import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from "@angular/router";

/**
 * Toolbar component which sits at top of the page. Most of the features of the website will be accessed
 * via this toolbar. Including search, authentication, creating postings and other core features.
 */
@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="header-row">

      <!-- Logo and Search on left hand side -->
      <div class="left-section">
        <header class="brand-name">
          <h1 [routerLink]="['/']">FREE SD</h1>
        </header>
        <section>
          <div class="search-container" (click)="navigateToSearchPage()">
            <p class="search-text">Search Events</p>
            <i class="search-icon"></i>
          </div>
        </section>
      </div>

      <!-- Login, Signup, and Create Event on right hand side -->
      <div class="right-section">
        <button class="text-button create-event" (click)="navigateToCreatePost()">Create Event</button>
        <button class="text-button">Login</button>
        <button class="text-button">Signup</button>
      </div>
    </div>

  `,
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private router: Router) {}

  navigateToSearchPage(): void {
    this.router.navigate(['/search']).then(r => {});
  }

  navigateToCreatePost(): void {
    this.router.navigate(['/new-post']).then(r => {});
  }
}
