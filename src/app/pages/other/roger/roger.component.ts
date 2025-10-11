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

  launchBird() {
    if (this.showBird) {
      this.flyBird = true;

      setTimeout(() => {
        this.flyBird = false;
      }, 3000); // Matches the CSS animation duration
    }
  }
}