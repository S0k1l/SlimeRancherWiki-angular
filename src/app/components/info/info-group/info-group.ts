import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-info-group',
  imports: [RouterLink],
  templateUrl: './info-group.html',
  styleUrl: './info-group.css',
})
export class InfoGroup {
  @Input() header: string = 'No header';
  @Input() route!: string;
  @Input() items!: { id: string; imgUrl: string; name: string }[];
}
