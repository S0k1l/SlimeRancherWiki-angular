import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabsContainer } from '../tabs-container/tabs-container';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-navigation-tabs',
  imports: [NgTemplateOutlet],
  templateUrl: './navigation-tabs.html',
  styleUrl: './navigation-tabs.css',
})
export class NavigationTabs {
  @ContentChildren(TabsContainer) containers!: QueryList<TabsContainer>;

  activeContainer!: TabsContainer;

  ngAfterContentInit() {
    if (this.containers.first) {
      this.selectContainer(this.containers.first);
    }
  }

  selectContainer(container: TabsContainer) {
    this.activeContainer = container;
  }
}
