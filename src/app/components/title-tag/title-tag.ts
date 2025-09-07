import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-tag',
  imports: [],
  templateUrl: './title-tag.html',
  styleUrl: './title-tag.css',
})
export class TitleTag {
  @Input() text: string = 'No Title';
}
