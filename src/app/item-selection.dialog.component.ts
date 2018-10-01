import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { MatDialogRef, MatTableDataSource, MAT_DIALOG_DATA } from '@angular/material';

import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { AppService } from './app.service';
import { Item } from './model';

@Component({
  selector: 'ascii-item-selection-dialog',
  templateUrl: './item-selection.dialog.component.html'
})
export class ItemSelectionDialogComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'price'];
  dataSource = new MatTableDataSource<Item>();

  selectedItems: Item[] = [];
  newItem: Item = {} as Item;
  totalSelected = 0;

  @ViewChild('table') table: ElementRef;

  constructor(private dialogRef: MatDialogRef<ItemSelectionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tapname: string }, private service: AppService) { }

  ngOnInit(): void {
    this.loadCatalog();
  }

  ngAfterViewInit(): void {
    fromEvent(this.table.nativeElement, 'click').pipe(
      debounceTime(2000),
    ).subscribe(() => this.dialogRef.close(this.selectedItems));
  }

  selectItem($event: MouseEvent, item: Item) {
    $event.srcElement.parentElement.style.backgroundColor = '#f5f5f5';
    this.selectedItems.push(item);
    this.calcTotal();
  }

  onSubmit() {
    if (this.newItem.name && this.newItem.price) {
      const data = this.dataSource.data;
      data.push(this.newItem);
      this.dataSource.data = data;

      this.service.addItem(this.newItem);
    }
  }

  calcTotal(): void {
    if (this.selectedItems.length > 0) {
      this.totalSelected = this.selectedItems.map(item => item.price).reduce((a, b) => a + b) || 0;
    } else {
      this.totalSelected = 0;
    }
  }

  private loadCatalog() {
    this.dataSource.data = this.service.getCatalog();
  }
}
