import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef, MatTableDataSource } from '@angular/material';

import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { AppService } from './app.service';
import { Item } from './model';

@Component({
  selector: 'ascii-item-selection-dialog',
  templateUrl: './item-selection.dialog.component.html'
})
export class ItemSelectionDialogComponent implements OnInit, AfterViewInit {

  private _selectedItems: Item[] = [];

  displayedColumns: string[] = ['name', 'price'];
  dataSource = new MatTableDataSource<Item>();

  newItem: Item = {} as Item;

  @ViewChild('table') table: ElementRef;

  constructor(private dialogRef: MatDialogRef<ItemSelectionDialogComponent>, private service: AppService) { }

  ngOnInit(): void {
    this.loadCatalog();
  }

  ngAfterViewInit(): void {
    fromEvent(this.table.nativeElement, 'click').pipe(
      debounceTime(2000),
    ).subscribe(() => this.dialogRef.close(this._selectedItems));
  }

  selectItem($event: MouseEvent, item: Item) {
    $event.srcElement.parentElement.style.backgroundColor = '#f5f5f5';
    this._selectedItems.push(item);
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
