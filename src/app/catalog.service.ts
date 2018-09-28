import { Injectable } from '@angular/core';

import { Item } from './model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  getItems(): Item[] {
    const taptab = JSON.parse(localStorage.getItem('taptab'));
    return taptab ? [] : taptab['items'];
  }

  addItem(item: Item): void {
    const items: Item[] = this.getItems();
    items.push(item);
    this.setItems(items);
  }

  remoteItem(item: Item): void {
    const items: Item[] = this.getItems();
    this.setItems(items.filter((value: Item) => item !== value));
  }

  private setItems(items: Item[]): void {
    localStorage.setItem('taptab', JSON.stringify({ items: items }));
  }
}
