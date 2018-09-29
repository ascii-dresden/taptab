import { Injectable } from '@angular/core';

import { Item, Tap } from './model';
import { default as json } from '../assets/catalog.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getCatalog(): Item[] {
    let catalog: Item[] = JSON.parse(localStorage.getItem('catalog')) || [];
    console.log(catalog);

    if (catalog.length === 0) {
      catalog = json;
      console.log(catalog);
      this.setItems(catalog);
    }

    return catalog;
  }

  addItem(item: Item): void {
    const catalog: Item[] = this.getCatalog();
    catalog.push(item);
    this.setItems(catalog);
  }

  removeItem(item: Item): void {
    const catalog: Item[] = this.getCatalog();
    this.setItems(catalog.filter((value: Item) => item !== value));
  }

  private setItems(catalog: Item[]): void {
    localStorage.setItem('catalog', JSON.stringify(catalog));
  }

  getTaps(): Tap[] {
    return JSON.parse(localStorage.getItem('taps')) || [];
  }

  addTap(name: string): void {
    const taps: Tap[] = this.getTaps();
    taps.push({ name: name, items: [] } as Tap);
    this.setTaps(taps);
  }

  addItem2Tap(tap: Tap, item: Item): void {
    const taps: Tap[] = this.getTaps();
    this.setTaps(taps.map((value: Tap) => {
      if (tap.name === value.name) {
        value.items.push(item);
      }
      return value;
    }));
  }

  removeTap(tap: Tap): void {
    this.setTaps(this.getTaps().filter((value: Tap) => value.name !== tap.name));
  }

  clearTap(tap: Tap): void {
    const taps: Tap[] = this.getTaps();
    this.setTaps(taps.map((value: Tap) => {
      if (tap.name === value.name) {
        value.items = [];
      }
      return value;
    }));
  }

  private setTaps(taps: Tap[]): void {
    localStorage.setItem('taps', JSON.stringify(taps));
  }
}
