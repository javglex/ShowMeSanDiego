import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { EventsService } from "../events.service";
import { EventItem } from "../eventItem"
import { Content } from "../ServerConstants";
import { Router } from "@angular/router";

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: 'new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {
  eventsService: EventsService = inject(EventsService);

  applyForm = new FormGroup({
    businessName: new FormControl(''),
    eventName: new FormControl(''),
    neighborhood: new FormControl(''),
    images: new FormControl('')
  });

  constructor(private router: Router) {}

  submitApplication() {
    let newEvent: EventItem = {
      neighborhood: this.applyForm.value.neighborhood ?? '',
      city: "San Diego",
      state: "CA",
      photo: this.applyForm.value.images ?? Content.DEFAULT_IMAGE,
      name: this.applyForm.value.eventName ?? '',
      business: this.applyForm.value.businessName ?? '',
      performer: "Test Performer",
      isPublished: false,  // do not publish until user reviews post and submits,
      startDate: "", //TODO: fix this shit
      endDate: "" //TODO: fix this shit
    }

    this.eventsService.postEvent(newEvent).then(it => {
      this.navigateToPreviewPost(it)
    })

  }

  navigateToPreviewPost(pendingEvent: EventItem): void {
    this.router.navigate(['/preview-post', pendingEvent.id], { state: { editMode: true } }).then(r => {});
  }

}
