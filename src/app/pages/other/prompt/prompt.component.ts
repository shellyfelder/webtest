import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import prompts from './prompts.json';

@Component({
  selector: 'prompt',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css'],
})
export class Prompt {

  // prompt = {
  //   characterType: '',
  // };

  prompt: any = {};
  characters: any[] = [];

  listCharacters(message: string, except: string) {
    this.characters = [];

    for (const value of prompts.characters) {
      const isExcluded = value.name === except;
      const hasBook1 = message.includes(' book1') ? value.book1 === true : true;
      const isMain = message.includes(' main') ? 
        (value.name === 'Clarke' || value.name === 'Davy') : true;

      if (!isExcluded && hasBook1 && isMain) {
        for (let i = 0; i < value.freq; i++) {
          this.characters.push(value);
        }
      }
    }
  }



}