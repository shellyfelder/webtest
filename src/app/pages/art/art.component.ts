import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'art',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './art.component.html',
})
export class Art {
  title = 'Art';


  artlist = [
    {
      name: 'Giant Peacock Moth',
      artist: 'Vincent van Gogh (1853 - 1890)',
      year: '1889',
      medium: 'Oil on Canvas',
      location: 'Van Gogh Museum, Amsterdam',
      desc: 'Mentioned in Chapter 1',
      source: '<p><a href="https://www.vangoghmuseum.nl/en/collection/s0189V1962">Van Gogh Museum, Amsterdam</a> (Vincent van Gogh Foundation)</p>',
      img: 'assets/images/moth.jpg'
    },
    {
      name: 'Castle and Sun',
      artist: 'Paul Klee (1879 - 1940)',
      year: '1928',
      medium: 'Oil on Canvas',
      location: 'Private Collection',
      desc: 'Mentioned in Chapter 23',
      source: '<p class="attribution">"<a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/147316538@N02/34256534524">Paul Klee, Castle and Sun, 1928</a>" by <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/147316538@N02">bianca.maggio</a> is marked with <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/publicdomain/mark/1.0/?ref=openverse">Public Domain Mark 1.0</a>. </p>',
      img: 'assets/images/klee.jpg'
    },
    {
      name: 'Still Life with Pomegranate and Pears',
      artist: 'Paul Cezanne (1839–1906)',
      year: '1890',
      medium: 'Oil on Canvas',
      location: 'Private Collection',
      desc: 'something',
      source: '<p><a href="https://commons.wikimedia.org/wiki/File:Grenade_et_poires_dans_une_assiette,_par_Paul_C%C3%A9zanne,_Yorck.jpg?uselang=en#Licensing">Grenade et poires dans une assiette, par Paul Cézanne, Yorck</a>, Wikipedia Commons. Public Domain.</p>',
      img: 'assets/images/pears.jpg'
    },
    {
      name: 'Nocturne in Black and Gold - The Falling Rocket',
      artist: 'James Abbott McNeill Whistler (1834-1903)',
      year: '1875',
      medium: 'Oil on Wood ',
      location: 'Detroit Institute of Arts, Detroit',
      desc: 'something',
      source: '<p><a href="https://commons.wikimedia.org/wiki/File:Whistler-Nocturne_in_black_and_gold.jpg?uselang=en#Licensing">Whistler-Nocturne in black and gold</a>, Wikipedia Commons. Public Domain.</p>',
      img: 'assets/images/nocturn.jpg'
    },
    {
      name: 'Riding with Death',
      artist: 'Jean-Michel Basquiat (1960 - 1988)',
      year: '1988',
      medium: 'Acrylic and Oilstick on Canvas',
      location: 'Private Collection',
      desc: 'something',
      source: '',
      img: 'assets/images/bas.jpg'
    },
  ];
}