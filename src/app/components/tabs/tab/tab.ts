import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  imports: [],
  templateUrl: './tab.html',
  styleUrl: './tab.css',
})
export class Tab {
  @Input() title!: string;
  @Input() img?: string;
  @Input() fetchData!: () => { name: string; imgUrl: string }[];

  active = false;
  data: { name: string; imgUrl: string }[] = [];
  private loaded = false; // track if data has already been loaded

  loadData() {
    if (!this.loaded) {
      this.data = this.fetchData();
      this.loaded = true; // ensure fetchData is called only once
    }
  }
}
