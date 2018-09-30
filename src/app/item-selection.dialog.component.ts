import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatTableDataSource } from '@angular/material';

import { AppService } from './app.service';
import { Item } from './model';

@Component({
  selector: 'ascii-item-selection-dialog',
  templateUrl: './item-selection.dialog.component.html'
})
export class ItemSelectionDialogComponent implements OnInit {

  displayedColumns: string[] = ['name', 'price'];
  dataSource = new MatTableDataSource<Item>();

  newItem: Item = {} as Item;

  constructor(private dialogRef: MatDialogRef<ItemSelectionDialogComponent>, private service: AppService) { }

  ngOnInit(): void {
    this.loadCatalog();
  }

  selectItem(item: Item) {
    this.dialogRef.close(item);
  }

  onSubmit() {
    if (this.newItem.name && this.newItem.price) {
      const data = this.dataSource.data;
      data.push(this.newItem);
      this.dataSource.data = data;

      this.service.addItem(this.newItem);
    }
  }

  private loadCatalog() {
    this.dataSource.data = this.service.getCatalog();
  }
}
