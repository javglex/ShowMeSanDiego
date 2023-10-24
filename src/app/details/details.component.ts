import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {EventItem} from "../eventItem";
import {EventsService} from "../events.service";
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from "@angular/material/icon";
import {EditType} from "../EditType";
import {EditDialogComponent} from "../edit-dialog/edit-dialog.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl:'../details.component.html',
  styleUrls: ['../details.component.css']
})
export class DetailsComponent {
  protected readonly EditType = EditType;

  route: ActivatedRoute = inject(ActivatedRoute);
  eventsService = inject(EventsService);
  event: EventItem | undefined;
  isEditing: Boolean = false;

  constructor(private dialog: MatDialog) {
    const eventId = parseInt(this.route.snapshot.params['id'], 10);
    this.eventsService.getEventById(eventId).then(event => {
      this.event = event;
    });
  }

  ngOnInit() {
    const urlSegments = this.route.snapshot.url.map(segment => segment.path);
    const currentUrl = '/' + urlSegments.join('/');
    this.isEditing = currentUrl?.includes('/preview-post') == true
  }

  openEditDialog(type: EditType) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '600px',
      data: {
        editText: this.getPropertyFromType(type),
        title: this.getTitleFromType(type)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result:', result);
      if (result != "") {
        this.setResult(type, result)
      }
    });
  }

  setResult(type: EditType, result: string) {
    if(this.event == undefined)
      return;

    switch(type) {
      case EditType.Description:
        this.event.description = result;
        break;
      case EditType.Neighborhood:
        this.event.neighborhood = result;
        break;
      case EditType.Performer:
        this.event.performer = result;
        break;
      case EditType.Title:
        this.event.name = result;
        break;
      case EditType.Business:
        this.event.business = result;
        break;
    }
  }

  getPropertyFromType(type: EditType) : String {
    switch(type) {
      case EditType.Description:
        return this.event?.description || ""
      case EditType.Neighborhood:
        return this.event?.neighborhood || ""
      case EditType.Performer:
        return this.event?.performer || ""
      case EditType.Title:
        return this.event?.name || ""
      case EditType.Business:
        return this.event?.business || ""
      default:
        return ""
    }
  }

  getTitleFromType(type: EditType): String {
    switch(type) {
      case EditType.Description:
        return "Edit description"
      case EditType.Neighborhood:
        return "Edit neighborhood"
      case EditType.Performer:
        return "Edit performer name"
      case EditType.Title:
        return "Edit event name"
      case EditType.Business:
        return "Edit business name"
      default:
        return ""
    }
  }

}
