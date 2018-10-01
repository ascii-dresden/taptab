import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';

import { Subscription } from 'rxjs';

import { AppService } from './app.service';
import { Tap, Item } from './model';
import { ItemSelectionDialogComponent } from './item-selection.dialog.component';

@Component({
  selector: 'ascii-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit, AfterViewChecked, OnDestroy {

  private _subscription = new Subscription();

  @ViewChild('newTap') input: ElementRef;
  @ViewChild('newTapForm') form: NgForm;
  newTapName: string;

  showNewTapInput = false;
  taps: Tap[] = [];

  constructor(private service: AppService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTaps();
  }

  ngAfterViewChecked(): void {
    if (this.showNewTapInput) {
      this.input.nativeElement.focus();
    }
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  toggleNewTapInput() {
    this.showNewTapInput = !this.showNewTapInput;
  }

  onSubmit() {
    if (this.newTapName) {
      this.service.addTap(this.newTapName);
      this.taps.push({ name: this.newTapName, items: [] });
      this.newTapName = '';
    }
    this.toggleNewTapInput();
  }

  getTotal(tap: Tap): number {
    if (tap.items.length > 0) {
      return tap.items.map(item => item.price).reduce((a, b) => a + b) || 0;
    } else {
      return 0;
    }
  }

  addItem(tap: Tap) {
    const dialogRef = this.dialog.open(ItemSelectionDialogComponent, { width: '640px' });

    this._subscription.add(dialogRef.afterClosed().subscribe((items: Item[]) => {
      if (items && items.length > 0) {
        tap.items.push(...items);
        this.service.addItem2Tap(tap, ...items);
      }
    }));
  }

  clearTap(tap: Tap) {
    tap.items = [];
    this.service.clearTap(tap);
  }

  deleteTap(tap: Tap) {
    this.taps = this.taps.filter((value: Tap) => tap !== value);
    this.service.removeTap(tap);
  }

  private loadTaps(): void {
    this.taps = this.service.getTaps();
  }
}
