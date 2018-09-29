import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { AppService } from './app.service';
import { Item } from './model';

@Component({
  selector: 'ascii-item-selection-dialog',
  templateUrl: './item-selection.dialog.component.html'
})
export class ItemSelectionDialogComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price'];
  catalog: Item[] = [];

  constructor(private dialogRef: MatDialogRef<ItemSelectionDialogComponent>, private service: AppService) { }

  ngOnInit(): void {
    this.loadCatalog();
  }

  selectItem(item: Item) {
    this.dialogRef.close(item);
  }

  private loadCatalog() {
    this.catalog = this.service.getCatalog();
  }
}
