import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from '../pages/home/home.component';
import { About } from '../pages/about/about.component';
import { Art } from '../pages/art/art.component';
import { Books } from '../pages/books/books.component';
import { Contact } from '../pages/contact/contact.component';
import { Faq } from '../pages/faq/faq.component';
import { Other } from '../pages/other/other.component';



@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule, Home, About, Art, Books, Contact, Faq, Other], 
  templateUrl: './navbar.component.html',
})
export class Navbar {
  title = 'Navbar';
  pageTitle = "Home";


  changePage(page:any) {
    this.pageTitle = page;
  }

}