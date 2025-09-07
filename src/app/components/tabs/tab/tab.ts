import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab',
  imports: [RouterLink],
  templateUrl: './tab.html',
  styleUrl: './tab.css',
})
export class Tab {
  @Input() name!: string;
  @Input() img?: string;
  @Input() path!: string;
  @Input() fetchData!: () => { id: string; name: string; imgUrl: string }[];

  active = false;
  data: { id: string; name: string; imgUrl: string }[] = [];
  private loaded = false; // track if data has already been loaded

  loadData() {
    if (!this.loaded) {
      this.data = this.fetchData();
      this.loaded = true; // ensure fetchData is called only once
    }
  }
}
