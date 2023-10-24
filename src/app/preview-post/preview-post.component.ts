import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from "../details/details.component";
import {Router} from "@angular/router";
import {EventItem} from "../eventItem";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {EditDialogComponent} from "../edit-dialog/edit-dialog.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {EditType} from "../EditType";

/**
 * Leverages [details.component.html] in order to create a preview of the event before it's published.
 */
@Component({
  selector: 'app-preview-post',
  standalone: true,
  imports: [
    CommonModule,
    DetailsComponent,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  template: '',
  styleUrls: ['../details.component.css']
})
export class PreviewPostComponent {
  event: EventItem | undefined;
  applyForm = new FormGroup({ // TODO might be good to remove
    businessName: new FormControl(''),
    eventName: new FormControl(''),
    neighborhood: new FormControl(''),
    images: new FormControl(''),
    websiteUrl: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private router: Router, private dialog: MatDialog) {
    try {
      let extras = this.router.getCurrentNavigation()?.extras?.state?.['event']
      if (extras) {
        this.event = extras as EventItem
        this.applyForm.setValue({
          businessName: this.event.business,
          eventName: this.event.name,
          description: this.event.description ?? '',
          websiteUrl: this.event.websiteUrl ?? '',
          neighborhood: this.event.neighborhood,
          images: this.event.photo
        })
      } else throw new Error("invalid extras")
    } catch (error) {
      console.error("Failed to process extras as EventItem", error);
    }
  }

  onSubmit() {

  }

  openEditDialog(type: EditType) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
    });
  }

  get isEditing(): boolean {
    return true
  }
}
