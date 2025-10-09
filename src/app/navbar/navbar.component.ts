import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../pages/home/home.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, HomeComponent], // ✅ import it here
  templateUrl: './navbar.component.html',
})
export class Navbar {
  title = 'Navbar';
  pageTitle = "Home";


  changePage(page:any) {
    this.pageTitle = page;
  }

}