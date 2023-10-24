import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  template: `
    <h2 mat-dialog-title>
      {{title}}
      <button mat-icon-button mat-dialog-close class="close-button">
        <mat-icon>close</mat-icon>
      </button>
    </h2>

    <mat-dialog-content>
      <mat-form-field class="full-width">
        <textarea matInput [(ngModel)]="editText"></textarea>
      </mat-form-field>
    </mat-dialog-content>

    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-button [mat-dialog-close]="editText">Submit</button>
    </mat-dialog-actions>
  `,
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  public editText: string = '';
  public title: string = 'Edit Item';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.editText = data.editText;
    this.title = data.title;
  }
}
