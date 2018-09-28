import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';
import { Tap } from './model';

@Component({
  selector: 'ascii-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {

  taps: Tap[] = [];

  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.loadTaps();
  }

  getTotal(tap: Tap): number {
    return tap.items.map(item => item.price).reduce((a, b) => a + b) || 0;
  }

  private loadTaps(): void {
    this.taps = this.service.getTaps();
  }
}
