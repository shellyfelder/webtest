import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Navbar } from './navbar/navbar.component'; // import the standalone component

@Component({
  selector: 'app-root',
  standalone: true,               
  imports: [Navbar, RouterModule, CommonModule],             
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  constructor(public router: Router) {}
}