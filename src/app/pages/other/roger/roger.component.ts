import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'roger',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './roger.component.html',
  styleUrls: ['./roger.component.css'],
})
export class Roger {
  showBird = false;
  flyBird = false;
  birdsflown = false;

  launchBird() {
    if (!this.birdsflown) {
      this.flyBird = true;
      this.birdsflown = true;

      setTimeout(() => {
        this.flyBird = false;
      }, 3000); // Matches the CSS animation duration
    }
  }
}