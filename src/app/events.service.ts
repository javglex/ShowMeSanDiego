import { Injectable } from '@angular/core';
import { EventItem } from './eventItem';
import {EventItemComponent} from "./housing-location/event-item.component";
@Injectable({
  providedIn: 'root'
})
export class EventsService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  url = 'http://localhost:3000/locations';
  constructor() { }

  async getAllEvents(): Promise<EventItem[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getEventById(id: number): Promise<EventItem | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  async postEvent(event: EventItem): Promise<EventItem> {
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    });

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      throw new Error(message);
    }

    const data: EventItem = await response.json();
    console.log(`Successfully Posted Event: ${data}`)
    return data;
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Events application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
