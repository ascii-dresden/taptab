import { Injectable } from '@angular/core';

import { Item, Tap } from './model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getCatalog(): Item[] {
    return JSON.parse(localStorage.getItem('catalog')) || [];
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

  removeTap(tap: Tap): void {
    const taps: Tap[] = this.getTaps();
    this.setTaps(taps.filter((value: Tap) => tap !== value));
  }

  private setTaps(taps: Tap[]): void {
    localStorage.setItem('taps', JSON.stringify(taps));
  }
}
