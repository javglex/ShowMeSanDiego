import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventItemComponent } from '../housing-location/event-item.component';
import { EventsService } from '../events.service';
import { EventItem } from "../eventItem";
import {UpsellCarouselComponent} from "../upsell-carousel/upsell-carousel.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EventItemComponent, UpsellCarouselComponent],
  template: `
    <section class="upsell-carousel">
      <app-upsell-carousel></app-upsell-carousel>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let event of filteredEventItems"
        [event]="event">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() searchQuery: String | undefined;
  allEventItems: EventItem[] = [];
  eventsService: EventsService = inject(EventsService);
  filteredEventItems: EventItem[] = [];

  constructor() {
    this.eventsService.getAllEvents().then((items: EventItem[]) => {
      let today = new Date().getTime();
      let publishedItems : EventItem[] = items.filter((it: EventItem) => it.isPublished);

      const differenceFromToday = (dateString: string) => {
        if (!dateString) {
          return Infinity; // assign a very large value for empty dates so they're sorted at the end
        }
        return Math.abs(new Date(dateString).getTime() - today);
      };

      publishedItems.sort((a, b) => differenceFromToday(a.startDate) - differenceFromToday(b.startDate));


      this.allEventItems = publishedItems;
      this.filteredEventItems = publishedItems;
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredEventItems = this.allEventItems;
    }

    this.filteredEventItems = this.allEventItems.filter(
      event => event?.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
