import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star-icon',
  templateUrl: './star-icon.component.html',
  styleUrls: ['./star-icon.component.css'],
})
export class StarIconComponent implements OnInit {
  isSelected = false;

  onClick() {
    return (this.isSelected = !this.isSelected);
  }

  constructor() {}

  ngOnInit(): void {}
}
