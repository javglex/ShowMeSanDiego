import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventItem } from '../eventItem';
import {Router, RouterLink} from "@angular/router";
import {Content} from "../ServerConstants";
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="listing">
      <img class="listing-photo"
           [src]="event.photo === '' ? Content.DEFAULT_IMAGE : event.photo" alt="Exterior photo of {{ event.name }}">
      <h2 class="listing-heading">{{ event.name }}</h2>
      <p class="listing-location">{{ event.neighborhood}}</p>
      <p *ngIf = "event.business != ''" class="listing-business">{{ event.business }}</p>
      <a [routerLink]="['/details', event.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent {
  @Input() event!: EventItem;
  protected readonly Content = Content;
}
