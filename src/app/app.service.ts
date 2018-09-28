import { Injectable } from '@angular/core';

import { Item, Person } from './model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

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

  getPersons(): Person[] {
    const taptab = JSON.parse(localStorage.getItem('taptab'));
    return taptab ? [] : taptab['persons'];
  }

  addPerson(person: Person): void {
    const persons: Person[] = this.getPersons();
    persons.push(person);
    this.setPerson(persons);
  }

  remotePerson(person: Person): void {
    const persons: Person[] = this.getPersons();
    this.setPerson(persons.filter((value: Person) => person !== value));
  }

  private setPerson(persons: Person[]): void {
    localStorage.setItem('taptab', JSON.stringify({ persons: persons }));
  }
}
