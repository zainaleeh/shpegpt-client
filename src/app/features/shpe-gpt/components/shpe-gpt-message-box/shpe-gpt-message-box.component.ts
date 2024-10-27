import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shpe-gpt-message-box',
  templateUrl: './shpe-gpt-message-box.component.html',
  styleUrls: ['./shpe-gpt-message-box.component.scss'],
})
export class ShpeGptMessageBoxComponent {
  @Input() messages: any = [];
}
