import { Component } from '@angular/core';

@Component({
  selector: 'app-linkedin-bar',
  templateUrl: './linkedin-bar.component.html',
  styleUrls: ['./linkedin-bar.component.scss'],
})
export class LinkedinBarComponent {
  names = [
    {
      name: 'Ismail Mustaali',
      linkedin: 'https://www.linkedin.com/in/ismail-mustaali',
    },
    { name: 'Zain Ali', linkedin: 'https://www.linkedin.com/in/zain-ali' },
  ];
  constructor() {}

  ngOnInit(): void {}

  getColor(index: number): string {
    const colors = ['lightgray'];
    return colors[index % colors.length];
  }
}
