import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
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
  MatChipsModule,
} from '@angular/material';

import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { ItemSelectionDialogComponent } from './item-selection.dialog.component';
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe, 'de');

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
    MatChipsModule,
  ],
  providers: [
    AppService,
    { provide: LOCALE_ID, useValue: 'de' },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ItemSelectionDialogComponent]
})
export class AppModule { }
