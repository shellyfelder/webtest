import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'other',
  standalone: true, 
  imports: [],
  templateUrl: './other.component.html',
})
export class Other {

  openNewTab(type: string) {
    const url = `${window.location.origin}/${type}`;
    window.open(url, '_blank');
  }

}