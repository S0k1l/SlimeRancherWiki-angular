import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-item',
  imports: [RouterLink],
  templateUrl: './info-item.html',
  styleUrl: './info-item.css',
})
export class InfoItem {
  @Input() imgUrl!: string | null;
  @Input() header: string = 'No header';
  @Input() itemName!: string | null;
  @Input() route!: string | any[];
}
