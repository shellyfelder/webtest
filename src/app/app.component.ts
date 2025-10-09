import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar.component'; // import the standalone component

@Component({
  selector: 'app-root',
  standalone: true,               
  imports: [Navbar],             
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
}