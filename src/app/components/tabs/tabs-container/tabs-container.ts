import {
  Component,
  ContentChildren,
  Input,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Tab } from '../tab/tab';

@Component({
  selector: 'app-tabs-container',
  imports: [],
  templateUrl: './tabs-container.html',
  styleUrl: './tabs-container.css',
})
export class TabsContainer {
  @ContentChildren(Tab) tabs!: QueryList<Tab>;

  @Input() name!: string;
  @Input() img!: string;

  get titleImg() {
    return this.img;
  }

  @ViewChild('containerTemplate', { static: true }) template!: TemplateRef<any>;

  ngAfterContentInit() {
    if (this.tabs.first) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: Tab) {
    this.tabs.forEach((t) => (t.active = false));
    tab.active = true;
    tab.loadData();
  }
}
