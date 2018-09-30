import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule,
  MatDividerModule,
  MatDialogModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { ItemSelectionDialogComponent } from './item-selection.dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemSelectionDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [ItemSelectionDialogComponent]
})
export class AppModule { }
