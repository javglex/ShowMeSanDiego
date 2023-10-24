import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <app-toolbar></app-toolbar>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  imports: [
    HomeComponent,
    RouterLink,
    RouterOutlet,
    ToolbarComponent
  ],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'showmesandiego16';
}
